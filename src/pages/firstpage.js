import React,{useState,useCallback} from "react";
import axios, { AxiosError } from 'axios';
import { useNavigate } from "react-router-dom";
import "../css/firstpage.css"
import image from '../img/background.png'
import logo from '../img/logo.png';
import { Navigate } from "react-router-dom";
function Firstpage(){
  const Navigate = useNavigate();
  function Move2(){
    Navigate("/SignUp")
  }
  function Move1(){
    Navigate("/SignIn")
  }
    return(
         <div id="firstpage_background" style={{backgroundImage:`url(${image})`}}>

           <div id="firstpage_container2">
                 <img id="firstpage_logo" alt="로고" src={logo}/>
            </div>
            <div id="firstpage_container3">
              도움의손길 
            </div>
            <div id="firstpage_container4">
                <div id="firstpage_login">
                  <button id="firstpage_login1" onClick={Move1}>로그인</button>
                </div>
                <div id="firstpage_signup">
                  <button id="firstpage_signup1" onClick={Move2}>회원가입</button>
                </div>
             </div>
            
       </div>
    )
}
export default Firstpage;