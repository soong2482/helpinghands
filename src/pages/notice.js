import { useNavigate } from "react-router-dom";
import "../css/notice.css"
import React from "react";
import leftarrow from '../img/leftarrow.png';
import { useState } from "react";

function Notice(){
    const [name, setName] = useState("");
    const navigate = useNavigate();
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
               <div id="notice_divcol">item1</div>
               <div id="notice_divcol">item2</div>
               <div id="notice_divcol">item3</div>
               <div id="notice_divcol">item4</div>
               <div id="notice_divcol">item5</div>
               <div id="notice_divcol">item6</div>
               <div id="notice_divcol">item7</div>
               <div id="notice_divcol">item8</div>
               <div id="notice_divcol">item9</div>
               <div id="notice_divcol">item10</div>
               <div id="notice_divcol">item11</div>
               <div id="notice_divcol">item12</div>
               <div id="notice_divcol">item13</div>
               <div id="notice_divcol">item14</div>
               <div id="notice_divcol">item15</div>
               <div id="notice_divcol">item16</div>
               <div id="notice_divcol">item17</div>
          </div>
       </div>
      </div>
    )
}
export default Notice;