import "../css/privacy.css"
import adv from '../img/adv.png';
import profile from '../img/profil.png';
import { useNavigate } from 'react-router-dom';
import leftarrow from '../img/leftarrow.png';
import rightarrow from '../img/rightarrow.png';
import change_name from '../img/change_name.png';
import change_agency from '../img/change_agency.png';
import change_profile from '../img/change_profile.png';
import axios from 'axios';
import { useEffect } from "react";
import { useState } from "react";

function Privacy() {
  const navigate = useNavigate();
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
      <div id ="privacy_back">
          <button id="privacy_back_button" onClick={() => {navigate("/mypage")}} >
             <img src={leftarrow} style={{ width: 30, height: 20 }} alt='화살표' />
          </button>
          <div id="privacy_profile_text">개인 정보</div>
          <div id="privacy_profile">
            <img id="privacy_profile_img" src={profile} alt='프로필' />
            <div id="privacy_name">{session}</div>
            <div id="privacy_agency">안동 행복 봉사 단체</div>
          </div>
          <button id="privacy_button1" onClick={() => {navigate("/namechange")}} >
          &emsp;&emsp;<img src={change_name} style={{ width: 25, height: 25 }} alt='사람' />
                  &emsp;&emsp;
                  이름 변경
                  &nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                  <img src={rightarrow} style={{ width: 20, height: 20 }} alt='화살표' />
          </button>
          <button id="privacy_button2" onClick={() => {navigate("/agencychange")}} >
          &emsp;&emsp;<img src={change_agency} style={{ width: 25, height: 25 }} alt='사람' />
                  &emsp;&emsp;
                  봉사 단체 변경
                  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                  <img src={rightarrow} style={{ width: 20, height: 20 }} alt='화살표' />
          </button>
          <button id="privacy_button3" onClick={() => {navigate("/profilechange")}} >
          &emsp;&emsp;<img src={change_profile} style={{ width: 25, height: 25 }} alt='사람' />
                  &emsp;&emsp;
                  프로필 사진 변경
                  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                  <img src={rightarrow} style={{ width: 20, height: 20 }} alt='화살표' />
          </button>
          <div id="privacy_div_adv">
              <img id="privacy_adv_img" src={adv}  alt='광고' />
          </div>
        </div>

  );
};

export default Privacy;