import React,{useState,useCallback,useEffect} from "react";
import { requiredList } from "../_actions/userAction";
import { useDispatch } from "react-redux";
import adv from '../img/adv.png';
import profile from '../img/profil.png';
import leftarrow from '../img/leftarrow.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../css/require.css"
import plus from '../img/plus.png';
import userlogo from '../img/userlogo1.png'
function Require(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [session,setSession]= useState(null);
    const [id,setId]=useState(null);
    const [List, setList] = useState(null);
    useEffect(()=>{
      axios.get(`/api/users/Session`)
      .then(response => {
          setSession(response.data.user);
          setId(response.data.id);
          let body={
            id:response.data.id
          }
          dispatch(requiredList(body))
          .then(response=>{
            if(response.payload.success){
              console.log(response.payload.data);
                  setList(response.payload.data);
            }
          })
      })
     
    },[]);

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
    {List && List.map((item)=>
    <div id="require_smallcomponent">
       <div id="require_divcol">
                      <div id="require_contents">
                        <button id="require_button">
                            <img src={plus} style={{ width: 10, height: 10 }} alt='플러스' onClick={() => {navigate("/realtimedetail")}} />
                        </button>
                            <div id="require_date"></div>
                            <div id="require_people">피해자:{item.name} </div>
                            <div id="require_phone">전화번호:{item.phone} </div>
                            <div id="require_address">주소:{item.address}</div>
                            <div id="require_success">{item.success}</div>
                    </div>
                    <img id="require_photo" src={userlogo}  alt='프로필'/>
                    </div>
    </div>
    )}
    <div id="require_div_adv">
        <img src={adv} style={{ height: '100%', width: '100%' }} alt='광고' />
    </div>
  </div>

  )
}
export default Require;