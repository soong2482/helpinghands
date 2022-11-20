import { useNavigate } from "react-router-dom";
import "../css/realtime.css"
import React from "react";
import leftarrow from '../img/leftarrow.png';
import { useState } from "react";
import axios from 'axios';
import { useEffect } from "react";
function Realtime(){
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const [session,setSession]= useState(null);
    useEffect(()=>{
      axios.get(`/api/users/Session`)
      .then(response => {
       console.log(JSON.stringify(response.data.user));
          setSession(response.data.user);
      })
    },[]);
    
    return(
        <div id="realtime_back">
          <div id="realtime_div1">
           <button id="realtime_back_button" onClick={() => {navigate("/Home")}} >
            <img src={leftarrow} style={{ width: 30, height: 20 }} alt='화살표' />
           </button>
           <div id="realtime_text">실시간 지원 현황</div> 
       </div>
       <div id="realtime_div2">
       <label>
        <input type="text" id="realtime_search" placeholder="검색" value={name} onChange={({ target: { value } }) => setName(value)}>
        </input>
       </label>
       </div>
       <div id="realtime_div3">
        <div id="realtime_grid">
               <div id="realtime_divcol">item1</div>
               <div id="realtime_divcol">item2</div>
               <div id="realtime_divcol">item3</div>
               <div id="realtime_divcol">item4</div>
               <div id="realtime_divcol">item5</div>
               <div id="realtime_divcol">item6</div>
               <div id="realtime_divcol">item7</div>
               <div id="realtime_divcol">item8</div>
               <div id="realtime_divcol">item9</div>
               <div id="realtime_divcol">item10</div>
               <div id="realtime_divcol">item11</div>
               <div id="realtime_divcol">item12</div>
               <div id="realtime_divcol">item13</div>
               <div id="realtime_divcol">item14</div>
               <div id="realtime_divcol">item15</div>
               <div id="realtime_divcol">item16</div>
               <div id="realtime_divcol">item17</div>
          </div>
       </div>
      </div>
    )
}
export default Realtime;