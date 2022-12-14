import "../css/Home.css"
import user from '../img/user.png'
import plus from '../img/plus.png';
import adv from '../img/adv.png';
import profile from '../img/profil.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from "react";
import React,{useState,useCallback, Component} from "react";
function App() {
  const navigate = useNavigate();
  const [List, setList] = useState(null);
  const [noticeList,setnoticeList] = useState(null);
  let result=[];
 useEffect(()=>{
    axios.get(`/api/repair/Home`)
    .then(response => {
        console.log(JSON.stringify(response.data,null,2));
        setList(response.data);
    })
    axios.get(`/api/notice/Home`)
    .then(response => {
        console.log(JSON.stringify(response.data,null,2));
        setnoticeList(response.data);
    })
 },[]);
 const [session,setSession]= useState(null);
 const [id,setId]=useState(null);
 useEffect(()=>{
   axios.get(`/api/users/Session`)
   .then(response => {
    console.log(JSON.stringify(response.data.user));   
       setSession(response.data.user);
       setId(response.data.id);
   })
 },[]);
  return (
    <div id ="Home_back">
    <div id="Home_div1">
        <div id="Home_text1">도움의손길</div>
        <div id="Home_text2">모든 것이 너에게 달려 있다</div>
        <button onClick={() => {navigate("/mypage")}} id="Home_button_user" >
        <img src={user} id="Home_user" alt='마이페이지' />
        </button>
    </div>

    <div id="Home_div2" >
        <button id="Home_button1" onClick={() => {navigate("/help")}}>
            봉사 신청
        </button>
        <button id="Home_button2" onClick={() => {navigate("/repair")}}>
            복구 신청
        </button>
    </div>
    <div id="Home_div3" >
      <div id ="Home_div_realtime">
        <button id="Home_button_realtime" style={{ marginLeft: -150, marginTop: -80 }} onClick={() => {navigate("/realtime")}}>
            실시간 지원 현황  
            &nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <img src={plus} style={{ width: 15, height: 15 }} alt='플러스' />
        </button>
      </div>
    
      <div id="Home_grid">
          {List && List.data.map((item)=>
               <div id="Home_divcol" key={item._id}>
                  <img id="Home_real_photo" src={"http://172.20.10.3:9000/files/"+item.path}  alt='프로필'/>
                  <button id="Home_real_button">
                      <img src={plus} style={{ width: 10, height: 10 }} alt='플러스' onClick={() => {navigate("/realtimedetail")}} />
                  </button>
                      <div id="Home_real_date">{item.data}</div>
                      <div id="Home_real_text">제목: {item.title}  </div>
                      <p> </p>
                      <div id="Home_real_position">위치: {item.address}</div>
                      <div id="Home_real_people">인원:4/{item.people}</div>
              </div>
          )}
       </div>
    </div>
    <div id="Home_div4">
    <button id="Home_button_month" style={{ marginLeft: -160, marginTop: -80 }}>
            이달의 봉사자 
            &nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
    </button>
        <div id="Home_grid1">
          <div id="Home_month_name"><h1>이승철</h1></div><p></p>
          <div id="Home_month_time">한달의 봉사 시간 : 65시간</div><p></p>
          <div id="Home_month_agency">소속 : 안동 행복 봉사 단체</div>
          <img id="Home_month_profile" src={profile} alt='프로필' />
       </div>
    </div>
    <div id="Home_div5">
    <button id="Home_button_notice" style={{ marginLeft: -150, marginTop: -80 }} onClick={() => {navigate("/notice")}}>
            공지 사항
            &nbsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <img src={plus} style={{ width: 15, height: 15 }} alt='플러스' />
    </button>
    <div id="Home_grid2" >
         {noticeList && noticeList.data.map((item)=>
        
                <button id="Home_notice_button" onClick={() => {navigate("/noticedetail")}}>
                    <div id="Home_divcol2">
                    <div id="Home_notice_text">
                       {item.title}
                       <br></br>
                       {item.text}
                   </div>
               </div>
              </button>
         
              
          )}
     
    </div>
    </div>
    <div id="Home_div6">
        <img id="Home_adv"style={{ height: '100%', width: '100%' }}  src={adv} alt='광고' />
    </div> 
</div>
);
};
export default React.memo(App);