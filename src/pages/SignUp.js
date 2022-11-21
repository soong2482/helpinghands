
import React,{useState,useCallback} from "react";
import { useNavigate } from "react-router-dom";
import logo from '../img/logo.png';
import logo2 from '../img/33.png';
import logo3 from '../img/11.png';
import logo4 from '../img/55.png';
import '../css/signup.css'
import { registerUser } from "../_actions/userAction";
import { useDispatch } from "react-redux";
function SignUp(props){
    const Navigate = useNavigate();
    const[name, setName] = useState('');
    const[email,setEmail]=useState('');
    const[password, setPassword]=useState('');
    const[repassword,setrePassword]=useState('');
    const[phone,setPhone]=useState('');
    const dispatch = useDispatch();
    const OnChangeEmail = useCallback(e=> {
      setEmail(e.target.value);
      }, []);
    const OnChangeName = useCallback(e=> {
      setName(e.target.value);
      }, []);
    const OnChangePhome = useCallback(e=> {
      setPhone(e.target.value);
    },[]);
    const OnChangePassword = useCallback(e => {
      setPassword(e.target.value);
      }, []);
      const onChangerePassword= useCallback(e=>{
        setrePassword(e.target.value);
      },[]);
    const OnSubmit =(e) => {
      e.preventDefault();
      console.log(name, password);//dev
      let body={
        name: name,
        email:email,
        password: password,
        phone:phone,
        countV:0,
        role:0,
        nickname:name,
      }
      const emailRegex =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
      const regPhoneNumber = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/;
      if(!regPhoneNumber.test(phone)){
        alert('휴대폰 번호를 다시 입력해주세요')
      }
      if (!emailRegex.test(email)) {
        alert('이메일 형식이 아닙니다.')
      }
      if(password==repassword){
      dispatch(registerUser(body))
      .then(response =>{
        if(response.payload.success){
        alert("가입이 정상적으로 완료되었습니다.");
        Navigate("/SignIn");
        
      }
      else{
        
        alert("아이디나 닉네임이 중복되었습니다.");
      } 
    })
  }
  else{
    alert("비밀번호가 일치하지 않습니다.");
  }
      
  }
    return(   
    <div id="signup_background1">
         <img id="singnup_logo2" alt="로고" src={logo}/>
          <div id ="singnup_container6">
          <div>이름<div id="singnup_pwd">
            <input id="singnup_idinput" 
              value={name}
              type="text" 
              placeholder="                닉네임을 입력해주세요."
              onChange={OnChangeName}
              >
              </input>
            <img src={logo3} style={{
                width:"9%",
            }}/>
            </div>
            </div>
            <br></br>
            <div>아이디<div id="singnup_pwd">
            <input id="singnup_idinput" 
              value={email}
              type="text" 
              placeholder="                     @email.com"
              onChange={OnChangeEmail}
              >
              </input>
            <img src={logo3} style={{
                width:"9%",
            }}/>
            </div>
            </div>
            <br></br>
            <div>비밀번호<div id="singnup_pwd">
            <input id="singnup_idinput" 
            type="password" 
            placeholder="   특수문자 포함 8자 이상"
            onChange={OnChangePassword}
            value={password}
            ></input>
            <img src={logo2} style={{
                width:"10%",
            }}/>
            </div>
            </div>
            <br></br>
            <div>비밀번호 재확인<div id="singnup_pwd">
            <input id="singnup_idinput" 
            type="password" 
            placeholder="   다시 한번 입력해주세요."
            onChange={onChangerePassword}
            value={repassword}
            ></input>
            <img src={logo2} style={{
                width:"10%",
            }}/>
            </div>
            </div>
            <br></br>
            <div>휴대폰번호<div id="singnup_pwd">
            <input id="singnup_idinput" 
            type="text" 
            placeholder="          010-0000-0000"
            onChange={OnChangePhome}
            value={phone}
            >
            </input>
            <img src={logo4} style={{
                width:"10%",
            }}/>
            </div>
            </div>
            <div id ="singnup_container7">
            <button id="singnup_sign" onClick={OnSubmit}>회원가입</button>
            </div>
          </div>

          <div id ="singnup_container8">
          </div>
          <div id ="singnup_container9">
          </div>

    </div>)
}
export default SignUp;