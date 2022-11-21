import React from "react";
import "../css/help.css"
import leftarrow from '../img/leftarrow.png';
import { useNavigate } from 'react-router-dom';
import KakaoMap from '../components/KakaoMap';
import globe from '../img/globe.png';
import search from '../img/search.png';
import { useState } from 'react'

function Help(){
    const navigate = useNavigate();
    const [account, setAccount] = useState({});
    const onChangeAccount = (e) => {
        setAccount({
          ...account,
          [e.target.name]: e.target.value,
        });
        console.log(e.target.value);};

    return(
        <div id="help_back">

            <div id="help_div1">
                <button id="help_back_button" onClick={() => {navigate("/Home")}} >
                    <img src={leftarrow} style={{ width: 30, height: 20 }} alt='화살표' />
                </button>
                <div id="help_text">봉사 신청</div>
            </div>

            <div id="help_div2">
                <KakaoMap/>
            </div>

            <div id="help_div3">
            <form action="." method="post">
                  <div id="help_div3_1">
                      <img id="help_globe" src={globe} style={{width: 30, height: 20 }} alt='지구본' />
                       <input id="help_search-txt" type="text" placeholder="주소를 입력해주세요."onChange={onChangeAccount}></input>
                       <button id="help_search-btn" type="submit">
                         <img src={search} style={{width: 30, height: 20 }} alt='검색' />
                    </button>
                  </div>
                </form>
            </div>
        </div>
    )
}
export default Help;