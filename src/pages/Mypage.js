import "../css/Mypage.css"
import adv from '../img/adv.png';
import profile from '../img/profil.png';
import human from '../img/human.png';
import alram from '../img/alram.png';
import protect from '../img/protect.png';
import participation from '../img/participation.png';
import recruitment from '../img/recruitment.png';
import logout from '../img/logout.png';
import axios from 'axios';
import rightarrow from '../img/rightarrow.png';
import leftarrow from '../img/leftarrow.png';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
function Mypage() {
  const navigate = useNavigate();
axios.get('/api').then(response=>{console.log(response)})
  const logout =() => {
        axios.get(`/api/users/logout`)
        .then(response => {
                console.log(response.data)
            if (response.data.success) {
                navigate("/");
            } else {
                alert('로그아웃 하는데 실패 했습니다.')
            }
        })
  }
  const [session,setSession]= useState(null);
  const [id,setId]=useState(null);
  useEffect(()=>{
    axios.get(`/api/users/Session`)
    .then(response => {
     console.log(JSON.stringify(response.data.user));
     console.log(JSON.stringify(response.data.id));
        setSession(response.data.user);
        setId(response.data.id);
    })
  },[]);
  return (
        <div id ="mypage_back">
            <button id="mypage_back_button" onClick={() => {navigate("/Home")}} >
               <img src={leftarrow} style={{ width: 30, height: 20 }} alt='화살표' />
            </button>
            <div id="mypage_profile_text">프로필</div>
            <div id="mypage_profile">
              <img id="mypage_profile_img" src={profile} alt='프로필' />
              <div id="mypage_name">{session}</div>
              <div id="mypage_agency">안동 행복 봉사 단체</div>
            </div>
            <button id="mypage_button1" onClick={() => {navigate("/privacy")}} >
            &emsp;&emsp;<img src={human} style={{ width: 20, height: 20 }} alt='사람' />
                    &emsp;&emsp;
                    개인 정보
                    &nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                    <img src={rightarrow} style={{ width: 20, height: 20 }} alt='화살표' />
            </button>
            <button id="mypage_button2" onClick={() => {navigate("/")}}>
            &emsp;&emsp;<img src={alram} style={{ width: 20, height: 20 }} alt='알림' />
                    &emsp;&emsp;
                    알림 및 소리
                    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                    <img src={rightarrow} style={{ width: 20, height: 20 }} alt='화살표' />
            </button>
            <button id="mypage_button3" onClick={() => {navigate("/")}}>
            &emsp;&emsp;<img src={protect} style={{ width: 20, height: 20 }} alt='개인정보' />
                    &emsp;&emsp;
                    개인정보 보호 및 공유
                    &nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                    <img src={rightarrow} style={{ width: 20, height: 20 }} alt='화살표' />
            </button>
            <button id="mypage_button4" onClick={() => {navigate("/")}}>
            &emsp;&emsp;<img src={participation} style={{ width: 20, height: 20 }} alt='봉사 참여' />
                    &emsp;&emsp;
                    봉사 참여 확인
                    &nbsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                    <img src={rightarrow} style={{ width: 20, height: 20 }} alt='화살표' />
            </button>
            <button id="mypage_button5" onClick={() => {navigate("/")}}>
            &emsp;&emsp;<img src={recruitment} style={{ width: 20, height: 20 }} alt='봉사 모집' />
                    &emsp;&emsp;
                    봉사 모집 및 신청
                    &nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                    <img src={rightarrow} style={{ width: 20, height: 20 }} alt='화살표' />
            </button>
            <button id="mypage_button6" onClick={() => {navigate("/")}}>
            &emsp;&emsp;<img src={logout} style={{ width: 20, height: 20 }} alt='로그 아웃' />
                    &emsp;&emsp;
                    로그아웃
                    &nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                    
            </button>
            <div id="mypage_div_adv">
                <img src={adv} style={{ height: '100%', width: '100%' }} alt='광고' />
            </div>
          </div>
  
  );
};
export default Mypage;
