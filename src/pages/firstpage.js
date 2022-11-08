import React,{useState,useCallback} from "react";
import axios, { AxiosError } from 'axios';
function Firstpage(){
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
         <div>
            로그인
            <input
              type="text"
              name="name"
              onChange={OnChangeName}
              value={name}
              >
            </input>
            <input
              type="password"
              name="pw"
              onChange={OnChangePassword}
              value={password}
             ></input>
            <button type="submit" onClick={OnSubmit} >로그인</button>
         </div>
    )
}
export default Firstpage;