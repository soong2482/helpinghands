import "../css/Home.css"
import user from '../img/user.png'
import plus from '../img/plus.png';
import adv from '../img/adv.png';
import profile from '../img/profil.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import React,{useState,useCallback, Component} from "react";
import { useEffect } from "react";
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
  return (
      <div id ="Home_back">
          <div id="Home_div1">
              <div id="Home_text1">도움의손길</div>
              <div id="Home_text2">모든 것이 너에게 달려 있다</div>
              <button onClick={() => {navigate("/mypage")}} id="Home_button_user" style={{ marginTop: 15 }}>
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
                  &nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                  <img src={plus} style={{ width: 15, height: 15 }} alt='플러스' />
              </button>
            </div>
          
             <div id="Home_grid">
                {List && List.data.map((item)=>
                    <div id="Home_divcol" key={item._id}>
                     {item.name}
                     {item.address}
                        
                    </div>
                )};
             </div>
          </div>
          <div id="Home_div4">
          <button id="Home_button_month" style={{ marginLeft: -160, marginTop: -80 }}>
                  이달의 봉사자 
                  &nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          </button>
              <div id="Home_grid1">
                <div id="Home_month_name"><h1>박세빈 </h1> </div><p></p>
                <div id="Home_month_time">한달의 봉사 시간 : 65시간</div><p></p>
                <div id="Home_month_agency">소속 : 안동 행복 봉사 단체</div>
                <img id="Home_month_profile" src={profile} alt='프로필' />
             </div>
          </div>
          <div id="Home_div5">
          <button id="Home_button_notice" style={{ marginLeft: -150, marginTop: -80 }} onClick={() => {navigate("/notice")}}>
                  공지 사항
                  &nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; &emsp;&emsp;
                  <img src={plus} style={{ width: 15, height: 15 }} alt='플러스' />
          </button>
          <div id="Home_grid2">
               {noticeList && noticeList.data.map((item)=>
                    <div id="Home_divcol" key={item._id}>
                     {item.title}
                        
                    </div>
                )};
           
          </div>
          </div>
          <div id="Home_div6">
              <img src={adv} style={{ height: '100%', width: '100%' }} alt='광고' />
          </div>
      </div>
  );
};

export default App;