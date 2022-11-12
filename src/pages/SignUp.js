
import React,{useState,useCallback} from "react";
import logo from '../img/logo.png';
import logo2 from '../img/33.png';
import logo3 from '../img/11.png';
import logo4 from '../img/55.png';
import '../css/signup.css'
import { registerUser } from "../_actions/userAction";
import { useDispatch } from "react-redux";
function SignUp(props){
    const[name, setName] = useState('');
    const[password, setPassword]=useState('');
    const dispatch = useDispatch();
    const OnChangeName = useCallback(e=> {
      setName(e.target.value);
      }, []);
    const OnChangePassword = useCallback(e => {
      setPassword(e.target.value);
      }, []);
    const OnSubmit =(e) => {
      e.preventDefault();
      console.log(name, password);
      let body={
        name: name,
        password: password,
      }
      dispatch(registerUser(body)).then((res)=>{
        alert("가입이 정상적으로 완료되었습니다.");
      });

    };
    return(   
    <div id="signup_background1">
         <img id="singnup_logo2" alt="로고" src={logo}/>
          <div id ="singnup_container6">
            <div>아이디<div id="singnup_pwd">
            <input id="singnup_idinput" 
              value={name}
              type="text" 
              placeholder="                     @email.com"
              onChange={OnChangeName}
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
            <div>비밀번호재확인<br></br>
            <input id="singnup_idinput" type="password" placeholder="    한번 더 입력해주세요."></input></div>
            <br></br>
            <div>휴대폰번호<div id="singnup_pwd">
            <input id="singnup_idinput" type="text" placeholder="          010-0000-0000"></input>
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