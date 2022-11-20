import React from "react";
import "../css/noticedetail.css"
import { useNavigate } from "react-router-dom";
import leftarrow from '../img/leftarrow.png';
import profile from '../img/profil.png';
import { useState } from "react";
import axios from 'axios';
import { useEffect } from "react";
function Noticedetail(){
    const navigate = useNavigate();
    const [session,setSession]= useState(null);
    useEffect(()=>{
      axios.get(`/api/users/Session`)
      .then(response => {
       console.log(JSON.stringify(response.data.user));
          setSession(response.data.user);
      })
    },[]);
    return(
        <div id="noticedetail_back">
                <div id="noticedetail_div1">
                    <button id="noticedetail_back_button" onClick={() => {navigate("/Home")}} >
                        <img src={leftarrow} style={{ width: 30, height: 20 }} alt='화살표' />
                    </button>
                    <div id="repair_text">공지 사항 상세 페이지</div>
                </div>
                <div id="noticedetail_div2">
                    <img src={profile} id="noticedetail_profile" alt='마이페이지' />
                    <div id="noticedetail_name">관리자</div>
                    <div id="noticedetail_date">2022-11-19 18:38</div>
                </div>
                <div id="noticedetail_div3">
                    <div id="noticedetail_title">[긴급]제목입니다.</div>
                </div>
                <div id="noticedetail_div4">
                    <div id="noticedetail_contents">내용입니다.</div>
                </div>
            </div>
    )
}
export default Noticedetail;