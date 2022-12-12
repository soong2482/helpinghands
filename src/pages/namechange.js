import "../css/namechange.css"
import adv from '../img/adv.png';
import React,{useState,useCallback,useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import leftarrow from '../img/leftarrow.png';
import { ChangeName } from "../_actions/userAction";
import { useDispatch } from "react-redux";
import axios from 'axios';
function Namechange() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [session,setSession]= useState(null);
  const [id,setId]=useState(null);
  useEffect(()=>{
    axios.get(`/api/users/Session`)
    .then(response => {
     console.log(JSON.stringify(response.data.user));
     console.log(JSON.stringify(response.data.id));
        setSession(response.data.user);
        setId(response.data.id);
    })
  },[]);
  const Change=(e)=>{
    e.preventDefault();
    let body={
      session:id,
      Name:Name
    }
    dispatch(ChangeName(body))
         .then(response => {
            if(response.payload.success){
              alert("이름이 변경되었습니다.")
              navigate("./Mypage");
        }
      })
  }
  const [Name,setName] =useState();
  const OnChangeName = useCallback(e=> {
    setName(e.target.value);
    }, []);
  return (
      <div id ="namechange_back">
          <button id="namechange_back_button" onClick={() => {navigate("/privacy")}} >
             <img src={leftarrow} style={{ width: 30, height: 20 }} alt='화살표' />
          </button>
          <div id="namechange_profile_text">이름 변경</div>
          <div id="namechange_div1">
            <h4>변경할 이름을 입력해주세요.</h4>
             <input id="namechange_input" type="text" placeholder=""
             value={Name}
             onChange={setName}
             ></input>
             <br></br><br></br><br></br><br></br>
             <button id="namechange_button" onClick={Change}>이름 변경</button>
          </div>
          <div id="namechange_div_adv">
              <img src={adv} style={{ height: '100%', width: '100%' }} alt='광고' />
          </div>
        </div>

  );
};

export default Namechange;