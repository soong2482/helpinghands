import { useNavigate } from "react-router-dom";
import React,{useState,useCallback} from "react";
import image from '../img/background.png'
import '../css/SignIn.css'
import logo3 from '../img/userlogo1.png';
import leftarrow from '../img/leftarrow.png';
import { loginUser } from "../_actions/userAction";
import { useDispatch } from "react-redux";
function SignIn(){
  const Navigate = useNavigate();
    const[email, setEmail] = useState('');
    const[password, setPassword]=useState('');
    const onChangePassword = useCallback(e => {
        setPassword(e.target.value);
        }, []);
    const onChangeName = useCallback(e => {
        setEmail(e.target.value);
        }, []);
    const dispatch = useDispatch();
    const onSubmit =(event) => {
        event.preventDefault();  
        console.log(email, password);//dev
        let body={
          email: email,
          password: password,
        }
        dispatch(loginUser(body))
         .then(response => {
            console.log("!");
            if(response.payload.loginSuccess){
          Navigate("/Home");       
        } else {
          alert("비밀번호 혹은 아이디가 없습니다.");
        }
      })
    }
    return(
    <div id="SignIn_Background" style={{backgroundImage:`url(${image})`}}>
        <div id="SignIn_container0">
        <button id="mypage_back_button" onClick={() => {Navigate("/")}} >
               <img src={leftarrow} style={{ width: 30, height: 20 }} alt='화살표' />
            </button>
        </div>
        <div id="SignIn_container1">
          로그인
        </div>
        <div id="SignIn_container2">
        <img id="userLogo" alt="로고" src={logo3}/>
        </div>
        <div id="SignIn_container3">
        <div>아이디</div>
        <input id="SignIn_idinput" 
        type="text" 
        value={email}
        onChange={onChangeName}
        ></input>
        </div>
        <div id="SignIn_container4">
            <div>비밀번호</div>
        <input id="SignIn_pwinput" 
        type="password" 
        placeholder="                 "
        onChange={onChangePassword}
        value={password}
        ></input>
        </div>
        <div id="SignIn_container5">
        </div>
        <div id="SignIn_container6">
                  <button id="SignIn_login1"
                   onClick={onSubmit}
                  >로그인</button>
        </div>
        
    </div>
    )
}
export default SignIn;