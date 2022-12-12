/*global kakao*/ 
import React, { useEffect,useState,useCallback } from 'react'
import "../css/help.css"
import axios from "axios";
import { required } from "../_actions/userAction";
import { datarequire } from '../_actions/userAction';
import { useDispatch } from "react-redux";
import leftarrow from '../img/leftarrow.png';
import logo7 from '../img/pang.jpg';
import { useNavigate} from "react-router-dom";
import {requireLikeList} from "../_actions/userAction";
function Help(){ 
  const M = window.M;
    const [List,setList] =useState();
    const [kakaoMap, setKakaoMap] = useState(null);
    const [Faddress,setFaddress]= useState();
    const [session,setSession]= useState(null);
    const [menuOpen, setMenuOpen] = useState(false)
    const [DataList,setDataList]= useState(null);
    const [sign,setsign] =useState(null);
    const [sessionAddress,setsessionAddress]= useState(null);
    const [dataAddress] = useState([]);
    const [DataAddress,setDataAddress]=useState([]);
    const [Count,setCount] = useState();
 useEffect(()=>{
   axios.get(`/api/users/Session`)
   .then(response => {
       setSession(response.data.id);
       setsessionAddress(response.data.address);
       console.log(response.data.address);
   })
 },[]);

    useEffect(()=>{
        axios.get(`/api/repair/list`)
        .then(response => {
         setList(response.data);
         setCount(response.data.count);
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
    var userAdd;
    geocoder.addressSearch(`${sessionAddress}`,function(result){
      userAdd=parseFloat(result[0].x)+parseFloat(result[0].y)
    })
    List&&List.data.map((item)=>
    geocoder.addressSearch(`${item.address}`,function(result){
         const data ={
          id:item.id_count,
          latlng:parseFloat(result[0].x)+parseFloat(result[0].y)+parseFloat(userAdd),
          address:item.address,
          title:item.address,
          text:item.text,
          img:item.Img1,
          people:item.people,
         }
         if(isNaN(data.latlng)){
          initMap();
        }
         dataAddress.push(data);
       
    })
  )
  console.log("렌더링");
  };
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const geocoder = new kakao.maps.services.Geocoder();
  const fi=(e)=>{
    e.preventDefault();
    const dataaddress =dataAddress.filter((element)=>!isNaN(element.latlng));        
  const DataAddresss= dataaddress.filter((item, i) => {
    return (
      dataaddress.findIndex((item2, j) => {
        return item.id === item2.id;
      }) === i
    );
  });
  DataAddresss.sort(function(a,b){
    return b.latlng-a.latlng
  })
setDataAddress(DataAddresss);
console.log(DataAddress);
}
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
      M.pop.alert("신청이 정상적으로 완료되었습니다.");
      Navigate("/Home");
  }
  else{
    alert("실패");
  }
  })
}


  return( 
  <div id="help_container"> 
    <button id="help_back_button" onClick={() => {Navigate("/Home")}} >
          <img src={leftarrow} style={{ width: 40, height: 30 }} alt='화살표'  />
          </button>
          <div id = "help_text">봉사신청</div>
    <div><button id="help_btn" onClick={initMap}>전체화면으로</button>
    <button onClick={fi}>추천목록 보기</button>
    </div>
    
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
                    <img id = "help_img" src={"http://172.20.10.3:9000/files/"+item.path} style={{ width:"100%" }}/>
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
export default  React.memo(Help);