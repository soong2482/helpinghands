import "../css/profilechange.css"
import adv from '../img/adv.png';
import { useNavigate } from 'react-router-dom';
import leftarrow from '../img/leftarrow.png';
import axios from 'axios';
import { useEffect } from "react";
import { useState } from "react";

function Profilechange() {
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
  const navigate = useNavigate();
  return (
      <div id ="profilechange_back">
          <button id="profilechange_back_button" onClick={() => {navigate("/privacy")}} >
             <img src={leftarrow} style={{ width: 30, height: 20 }} alt='화살표' />
          </button>
          <div id="profilechange_profile_text">프로필 사진 변경</div>
          <div id="profilechange_div1">
            <h4>변경할 사진을 선택해주세요.</h4>
             <button id="profilechange_button">프로필 사진 변경</button>
          </div>
          <div id="profilechange_div_adv">
              <img src={adv} style={{ height: '100%', width: '100%' }} alt='광고' />
          </div>
        </div>

  );
};

export default Profilechange;