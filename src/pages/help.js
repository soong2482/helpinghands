/*global kakao*/ 
import React, { useEffect,useState } from 'react'
import  styles from "../css/help.css"
import axios from "axios";
import { require } from "../_actions/userAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Help(props){ 
  const dispatch = useDispatch();
  const Navigate = useNavigate();
    const [List,setList] =useState();
    const [kakaoMap, setKakaoMap] = useState(null);
    useEffect(()=>{
        axios.get(`/api/repair/list`)
        .then(response => {
         setList(response.data);
          initMap();
        })
    }, []);
    const [session,setSession] = useState();
 const initMap=() => {
    let container = document.getElementById("map");
    let options = {
      center: new kakao.maps.LatLng(36.4109466, 128.1590828),//상주
      level: 12,
      isPanto:true,
    };
    const map = new kakao.maps.Map(container, options);
    map.setDraggable(false);
    setKakaoMap(map);
  };


  
  const geocoder = new kakao.maps.services.Geocoder();
  {List && List.data.map((item)=>
      geocoder.addressSearch(`${item.address}`,function(result){
               var x = result[0].x;
               var y = result[0].y;
               var latlng = new kakao.maps.LatLng(y,x);
               let marker = new kakao.maps.Marker({
                position: latlng,
                image: null,
                clickable: true,
              });
            kakao.maps.event.addListener(marker, 'click', function(mouseEvent) {
              let container = document.getElementById("map");
              let options = {
                center: new kakao.maps.LatLng(y,x),
                level: 5,
                isPanto:true,
              };
              var iwContent ='<div>Hello World</div>',
               iwPosition = new kakao.maps.LatLng(y,x),
               iwRemoveable = true;
              var infowindow = new kakao.maps.InfoWindow({
                    map:map,
                    position: iwPosition,
                    content: iwContent,
                    removable: iwRemoveable
              })
             
            const map = new kakao.maps.Map(container, options);
               alert(marker.id);
              setKakaoMap(map);
            });
              
              marker.id=item.id_count;
              marker.setMap(kakaoMap);
              
      })
   )}
   const require=(item) =>{
    let address=item
    dispatch(require(address))
    .then(response =>{
      if(response.payload.success){
      alert("신청이 정상적으로 완료되었습니다.");
      Navigate("/Home");
  }
  })
}

  return( 
  <div id="help_container"> 
    <button onClick={initMap}>전체화면으로</button>
  <div id="map" style={{ width: "50vw", height: "70vh" }}></div>
    
</div>
  )
}
export default Help