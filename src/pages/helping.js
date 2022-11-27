import React, { useEffect,useState,useCallback } from 'react'
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { userdatarequire,successdata } from "../_actions/userAction";
import adv from '../img/adv.png';
import profile from '../img/profil.png';
import leftarrow from '../img/leftarrow.png';
import plus from '../img/plus.png';
import userlogo from '../img/userlogo1.png'
import "../css/helping.css"
function Helping(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
const [session,setSession]= useState(null);
const [id,setId]=useState(null);
const [List, setList] = useState(null);
const [ID,setID]= useState(null);
 useEffect(()=>{
   axios.get(`/api/users/Session`)
   .then(response => {
       setSession(response.data.user);
       setId(response.data.id);
       let body={
        id:response.data.id
      }
       dispatch(userdatarequire(body))
       .then(response=>{
         if(response.payload.success){
           console.log(response.payload.data);
               setList(response.payload.data);
         }
       })
   })
 },[]);
   function success(item){

    let body={
        id:item
    }
    dispatch(successdata(body))
    .then(response=>{
        if(response.payload.success){
            alert("완료처리 되었습니다.");
          }
    })
   }
    return(
      <div id ="helping_back">
    <button id="helping_back_button" onClick={() => {navigate("/Mypage")}} >
       <img src={leftarrow} style={{ width: 30, height: 20 }} alt='화살표' />
    </button>
    <div id="helping_profile_text">봉사자 확인</div>
    <div id="helping_profile">
      <img id="helping_profile_img" src={profile} alt='프로필' />
      <div id="helping_name">{session}</div>
      <div id="helping_agency">안동 행복 봉사 단체</div>
    </div> 
    {List && List.map((item)=>
    <div id="helping_smallcomponent" key={item._id}>
                    <div id="helping_divcol">
                      <div id="helping_contents">
                        <button id="helping_button">
                            <img src={plus} style={{ width: 10, height: 10 }} alt='플러스' onClick={() => {navigate("/realtimedetail")}} />
                        </button>
                            <div id="helping_date"></div>
                            <div id="helping_people">봉사자:{item.name} </div>
                            <div id="helping_phone">전화번호:{item.phone} </div>
                            <div id="helping_address">봉사횟수:{item.countV}</div>
                            <div id="helping_success">
                             <button onClick={()=>{success(item._id)}}>완료</button>
                            </div>
                    </div>
                    <img id="helping_photo" src={userlogo}  alt='프로필'/>
                    </div>
             </div>
                )}
    <div id="helping_div_adv">
        <img src={adv} style={{ height: '100%', width: '100%' }} alt='광고' />
    </div>
  </div>
    )
}
export default Helping