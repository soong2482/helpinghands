import React from "react";
import "../css/realtimedetail.css"
import { useNavigate } from "react-router-dom";
import leftarrow from '../img/leftarrow.png';
import profile from '../img/profil.png';

function Realtimedetail(){
    const navigate = useNavigate();
    return(
        <div id="realtimedetail_back">
                <div id="realtimedetail_div1">
                    <button id="realtimedetail_back_button" onClick={() => {navigate("/Home")}} >
                        <img src={leftarrow} style={{ width: 30, height: 20 }} alt='화살표' />
                    </button>
                    <div id="repair_text">실시간 지원 현황 상세 페이지</div>
                </div>
                <div id="realtimedetail_div2">
                    <img src={profile} id="realtimedetail_profile" alt='마이페이지' />
                    <div id="realtimedetail_name">박세빈</div>
                    <div id="realtimedetail_date">2022-11-19 18:38</div>
                </div>
                <div id="realtimedetail_div3">
                    <div id="realtimedetail_title">제목입니다.</div>
                </div>
                <div id="realtimedetail_div4">
                    <div id="realtimedetail_contents">내용입니다.</div>
                </div>
            </div>
    )
}
export default Realtimedetail;