import { useEffect, useState } from "react";
import { Map, MapMarker, MapTypeId } from "react-kakao-maps-sdk";

const KakaoMap = () => {

  const [state, setState] = useState({
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    errMsg: null,
    isLoading: true,
  })

  useEffect(() => {
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setState((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude, // 위도
              lng: position.coords.longitude, // 경도

            },
            isLoading: false,
          }))
        },
        (err) => {
          setState((prev) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }))
        }
      )
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
      setState((prev) => ({
        ...prev,
        errMsg: "geolocation을 사용할수 없어요..",
        isLoading: false,
      }))
    }
    console.log([state]);
  }, [])
  const [position, setPosition] = useState();
  return (
    <>
      <Map // 지도를 표시할 Container
        center={state.center}
        style={{
          // 지도의 크기
          width: "500px",
          height: "830px",
        }}
        level={3} // 지도의 확대 레벨
        onClick={(_t, mouseEvent) => setPosition({
          lat: mouseEvent.latLng.getLat(),
          lng: mouseEvent.latLng.getLng(),
        })}
      >
        {position && <MapMarker position={position} />}
        {!state.isLoading && (
          <MapMarker position={state.center}>
            <div style={{ padding: "5px", color: "#000" }}>
              {state.errMsg ? state.errMsg : "현재위치 입니다."}
            </div>
          </MapMarker>
        )}
      </Map>
      {position && console.log('위도:' + position.lat + "  경도:" + position.lng)}
    </>
  )
}

export default KakaoMap;