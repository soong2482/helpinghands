/*global kakao*/ 
import React, { useEffect,useState } from 'react'
import  styles from "../css/help.css"
import axios from "axios";
import { required } from "../_actions/userAction";
import { useDispatch } from "react-redux";
import { useNavigate, useResolvedPath } from "react-router-dom";
function Help(){ 

    const [List,setList] =useState();
    const [kakaoMap, setKakaoMap] = useState(null);
    const [Faddress,setFaddress]= useState();
    useEffect(()=>{
        axios.get(`/api/repair/list`)
        .then(response => {
         setList(response.data);
          initMap();
        })
    }, []);
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
             
            const map = new kakao.maps.Map(container, options);
               alert(marker.id);
               setFaddress(item.address);
              setKakaoMap(map);
            });
              marker.id=item.id_count;
              marker.setMap(kakaoMap);
      
      })
   )}
   const dispatch = useDispatch();
   const Navigate = useNavigate();
   const onSubmit=(e)=>{
    e.preventDefault();
    let body={
      address:Faddress
    }
    dispatch(required(body))
    .then(response =>{
      if(response.payload.success){
      alert("신청이 정상적으로 완료되었습니다.");
      Navigate("/Home");
  }
  else{
    alert("실패");
  }
  })
}


  return( 
  <div id="help_container"> 
    <button onClick={initMap}>전체화면으로</button>
    <button onClick={onSubmit}>신청</button>
  <div id="map" style={{ width: "100vw", height: "90vh" }}></div>
    
</div>
  )
}
export default Help