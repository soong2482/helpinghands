import React from "react";
import "../css/repair.css"
import { useNavigate } from "react-router-dom";
import leftarrow from '../img/leftarrow.png';
import { useState } from "react";
import aaa from '../img/11.png';

function Repair(){
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");
    const [join, setJoin] = useState("");
    const navigate = useNavigate();
    return(
        <div id="repair_back">
            <div id = "package">
            <div id="repair_div1">
                <button id="repair_back_button" onClick={() => {navigate("/Home")}} >
                    <img src={leftarrow} style={{ width: 30, height: 20 }} alt='화살표' />
                </button>
                <div id="repair_text">복구 신청</div>
            </div>
            </div>
            <div id="repair_div2">
                <img src={aaa} style={{width:250 , height:400}} />
                <img src={aaa} style={{width:250 , height:400}} />
            </div>

            <div id = "repair_div3">
            <label>
             <input type="text" id="repair_title" placeholder="제목을 작성하십시오." value={title} onChange={({ target: { value } }) => setTitle(value)}>
              </input>
             </label>
            </div>
            <div id = "repair_div4">
            
            <textarea id="story" placeholder="내용을 입력하세요."
            rows="20"  cols="58">
            </textarea>
            <button id="repair_button" onClick={() => {navigate("/Home")}} >
                    <img src={leftarrow} style={{ width: 30, height: 20 }} alt='화살표' />
            </button>
            
            </div>
        </div>
    )
}
export default Repair;