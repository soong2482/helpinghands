import { useNavigate } from "react-router-dom";
import "../css/notice.css"
import React from "react";
import leftarrow from '../img/leftarrow.png';
import { useState } from "react";
import axios from 'axios';
import { useEffect } from "react";

function Notice(){
  const [name,setName] =useState(null);
  const [noticeList,setnoticeList] = useState(null);
    const navigate = useNavigate();
    useEffect(()=>{
      axios.get(`/api/notice/list`)
      .then(response => {
          console.log(JSON.stringify(response.data,null,2));
          setnoticeList(response.data);
      })
   },[]);
   const [session,setSession]= useState(null);
   useEffect(()=>{
     axios.get(`/api/users/Session`)
     .then(response => {
      console.log(JSON.stringify(response.data.user));
         setSession(response.data.user);
     })
   },[]);
    return(
        <div id="notice_back">
          <div id="notice_div1">
           <button id="notice_back_button" onClick={() => {navigate("/Home")}} >
            <img src={leftarrow} style={{ width: 30, height: 20 }} alt='화살표' />
           </button>
           <div id="notice_text">공지 사항</div> 
       </div>
       <div id="notice_div2">
       <label>
        <input type="text" id="notice_search" placeholder="검색" value={name} onChange={({ target: { value } }) => setName(value)}>
        </input>
       </label>
       </div>
       <div id="notice_div3">
        <div id="notice_grid">
        {noticeList && noticeList.data.map((item)=>
               <div id="notice_divcol" key={item._id}>
                  <div> {item.title} {item.text}</div>  
             
    </div>
      )}
    </div>
    </div>
    </div>
    )
}
export default Notice;