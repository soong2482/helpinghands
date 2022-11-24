import React,{useState,useCallback,useEffect} from "react";
import { requiredList } from "../_actions/userAction";
import { useDispatch } from "react-redux";
import adv from '../img/adv.png';
import profile from '../img/profil.png';
import leftarrow from '../img/leftarrow.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../css/require.css"
function Require(){
    const navigate = useNavigate();

    const [session,setSession]= useState(null);
    const [id,setId]=useState(null);
    const dispatch = useDispatch();
    const [List, setList] = useState(null);
    useEffect(()=>{
      axios.get(`/api/users/Session`)
      .then(response => {
        console.log(response.data.user,response.data.id);
          setSession(response.data.user);
          setId(response.data.id);
      })
      axios.get(`/api/help/list`)
      .then(response =>{
        setList(response.data);
      })
    },[]);
    console.log(List);
  return(
    <div id ="require_back">
    <button id="require_back_button" onClick={() => {navigate("/Mypage")}} >
       <img src={leftarrow} style={{ width: 30, height: 20 }} alt='화살표' />
    </button>
    <div id="require_profile_text">봉사 참여 확인</div>
    <div id="require_profile">
      <img id="require_profile_img" src={profile} alt='프로필' />
      <div id="require_name">{session}</div>
      <div id="require_agency">안동 행복 봉사 단체</div>
    </div>
    <div id = "require_text1">1</div>
    <div id = "require_text2">2</div>
    <div id = "require_text3">3</div>
    <div id = "require_text4">4</div>
    <div id = "require_text5">5</div>
    <div id = "require_text6">6</div>
    <div id = "require_text7">7</div>
    
    
    <div id="require_div_adv">
        <img src={adv} style={{ height: '100%', width: '100%' }} alt='광고' />
    </div>
  </div>

  )
}
export default Require;