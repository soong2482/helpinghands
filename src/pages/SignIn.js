import { useNavigate } from "react-router-dom";
import React from "react";
import image from '../img/background.png'
import '../css/SignIn.css'
import logo3 from '../img/userlogo1.png';
function SignIn(){
    return(
    <div id="SignIn_Background" style={{backgroundImage:`url(${image})`}}>
        <div id="SignIn_container0">
        </div>
        <div id="SignIn_container1">
          로그인
        </div>
        <div id="SignIn_container2">
        <img id="userLogo" alt="로고" src={logo3}/>
        </div>
        <div id="SignIn_container3">
        <div>아이디</div>
        <input id="SignIn_idinput" type="text" placeholder="       @email.com"></input>
        </div>
        <div id="SignIn_container4">
            <div>비밀번호</div>
        <input id="SignIn_pwinput" type="text" placeholder="                 "></input>
        </div>
        <div id="SignIn_container5">
        </div>
        <div id="SignIn_container6">
                  <button id="SignIn_login1">로그인</button>
        </div>
        
    </div>)
}
export default SignIn;