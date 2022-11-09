
import React,{useState,useCallback} from "react";
import axios, { AxiosError } from 'axios';
import image from '../img/background.png'
import logo from '../img/logo.png';
import logo2 from '../img/33.png';
import logo3 from '../img/11.png';
import logo4 from '../img/55.png';
import '../css/signup.css'
function SignUp(){
    const[name, setName] = useState('');
    const[password, setPassword]=useState('');
    const OnChangeName = useCallback(e=> {
      setName(e.target.value);
      }, []);
    const OnChangePassword = useCallback(e => {
      setPassword(e.target.value);
      }, []);
    const OnSubmit = useCallback(async () => {
      console.log(name, password);
      try{
        const response = await axios.post('/user',{name,password},{});
        console.log(response);
      }catch(error){
        const errorResponse = (error).response;
        console.error(errorResponse);
        if (errorResponse) {
           alert('알림', errorResponse.data.message);
        }
      }finally{
              
      }
    },[name,password]);
    return(   
    <div class="background1">
         <img id="logo2" alt="로고" src={logo}/>
          <div id ="container6">
            <div>아이디<div id="pwd">
            <input id="idinput" type="text" placeholder="                     @email.com"></input>
            <img src={logo3} style={{
                width:"9%",

            }}/>
            </div>
            </div>
            <br></br>
            <div>비밀번호<div id="pwd">
            <input id="idinput" type="text" placeholder="   특수문자 포함 8자 이상"></input>
            <img src={logo2} style={{
                width:"10%",
            }}/>
            </div>
            </div>
            <br></br>
            <div>비밀번호재확인<br></br>
            <input id="idinput" type="text" placeholder="    한번 더 입력해주세요."></input></div>
            <br></br>
            <div>휴대폰번호<div id="pwd">
            <input id="idinput" type="text" placeholder="          010-0000-0000"></input>
            <img src={logo4} style={{
                width:"10%",
            }}/>
            </div>
            </div>
          </div>
          <div id ="container7">
            
          </div>
          <div id ="container8">
          </div>
          <div id ="container9">
          </div>

    </div>)
}
export default SignUp;