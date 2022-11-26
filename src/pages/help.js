/*global kakao*/ 
import React, { useEffect,useState,useCallback } from 'react'
import "../css/help.css"
import axios from "axios";
import { required } from "../_actions/userAction";
import { datarequire } from '../_actions/userAction';
import { useDispatch } from "react-redux";
import logo7 from '../img/pang.jpg';
import { useNavigate, useResolvedPath } from "react-router-dom";

function Help(){ 
  const navigate = useNavigate();
    const [List,setList] =useState();
    const [kakaoMap, setKakaoMap] = useState(null);
    const [Faddress,setFaddress]= useState();
    const [session,setSession]= useState(null);
    const [menuOpen, setMenuOpen] = useState(false)
    const [DataList,setDataList]= useState(null);
    const [sign,setsign] =useState(null);
 useEffect(()=>{
   axios.get(`/api/users/Session`)
   .then(response => {
       setSession(response.data.id);
   })
 },[]);
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
      level: 13,
      isPanto:true,
    };
    const map = new kakao.maps.Map(container, options);
    setKakaoMap(map);
    setMenuOpen(false);
  };
  const dispatch = useDispatch();
  const Navigate = useNavigate();
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
              setsign(item.Img1);
              setMenuOpen(true);
              setFaddress(item.address);
            const map = new kakao.maps.Map(container, options);
            kakao.maps.event.addListener(map, 'click', function(mouseEvent) {        
                    setMenuOpen(false);
          });
          let body={
            address:item.address,
          }
          dispatch(datarequire(body))
          .then(response=>{
           if(response.payload.success){
             setDataList(response.payload.data);
             console.log(response.payload.data);
         }
        })
               setKakaoMap(map);
            });
              
              marker.id=item.id_count;
              marker.setMap(kakaoMap);
      
      })
   )}
   const onSubmit=(e)=>{
    e.preventDefault();
    let body={
      address:Faddress,
      session:session,
      user:sign
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
  <div id="map" style={{ width: "100vw", height: "90vh" }}>
  {DataList && DataList.map((item)=>  
  <div id = {menuOpen ? 'action' : ''} className="help_nav"key={item._id}>
        <div id= "smallcomponent_back">
            <div id = "smallcomponent_left">
                <div id = "smallcomponent_div1">
                <button id="smallcomponent_back_button" onClick={onSubmit} >
                    봉사신청
                    </button>
                    <br></br>
                    <div id ="smallcomponent_title">
                        <label>제목 </label>
                        <label style={{color:"orange"}}>{item.title}</label>
                    </div>
                    
                </div>
                <div id = "smallcomponent_div2">
                    <div id ="smallcomponent_address">
                        <label>주소   </label>
                        <label style={{color:"orange"}}>{item.address}</label>
                    </div>
                </div>
                <div id = "smallcomponent_div3">
                <label id = "smallcomponent_text" >{item.text}</label>
                </div>
                <br></br>
                <div id = "smallcomponent_picture">
                    <img id = "help_img" src={"http://localhost:9000/"+item.path} style={{ width:"100%" }}/>
                </div>
              
                
            </div>

            <div id = "smallcomponent_right">
                 
                
            </div>
           
        </div>
      </div>
 )}
  </div>
</div>
  )
}
export default Help