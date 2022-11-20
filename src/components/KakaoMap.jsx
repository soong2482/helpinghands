import { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { getCurrentLocation } from "../native/location";

const KakaoMap = () => {

  const [center, setCenter] = useState({
    lat: 36.542768,
    lng: 128.797359,
  });

  useEffect(() => {
    getCurrentLocation().then(({ lat, lng }) => {
      console.log(lng, lat);
      if (lng && lat) {
        setCenter({
          lat,
          lng,
        });
      }
    });
  }, []);
  return (
    <Map center={center} style={{ width: "500px", height: "800px" }}>
      <MapMarker position={center}>
        <div style={{ color: "#000" }} >현재 위치</div>
      </MapMarker>
    </Map>
  );
};

export default KakaoMap;
