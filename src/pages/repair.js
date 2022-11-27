
import "../css/repair.css"
import { useNavigate } from "react-router-dom";
import leftarrow from '../img/leftarrow.png';
import React,{useState,useCallback,useEffect} from "react";
import axios from 'axios';
import { useDispatch } from "react-redux";
import {repairUpload} from "../_actions/userAction";
import {repairApplication} from "../_actions/userAction";
import PopupDom from './PopupDom';
import PopupPostCode from './PopupPostCode';
import "../js/mcore.min.js"
import M from "../native";
function Repair(){
  const [IName,setIName] = useState();
const [IName1,setIName1] = useState();
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const navigate = useNavigate();
  // 팝업창 열기
   const openPostCode = () => {
       setIsPopupOpen(true)
   }

  // 팝업창 닫기
   const closePostCode = () => {
       setIsPopupOpen(false)
   }
   const [enroll_company, setEnroll_company] = useState({
     address:'',
   });
   const handleInput = (e) => {
     setEnroll_company({
         ...enroll_company,
           [e.target.name]:e.target.value,
       })
   }

  const [session,setSession]= useState("");
  const [id,setid] = useState("");
  useEffect(()=>{
    axios.get(`/api/users/Session`)
    .then(response => {
     console.log(JSON.stringify(response.data.user));
     console.log(JSON.stringify(response.data.id));
        setSession(response.data.user);
        setid(response.data.id);
    })
  },[]);
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [text,setText] = useState("");
  const onChangeTitle = useCallback(e => {
      setTitle(e.target.value);
      }, []);
  const onChangeText = useCallback(e => {
      setText(e.target.value);
      }, []);
    const dispatch = useDispatch();
    const [image, setImage] = useState();
    const [image1, setImage1] = useState(); 
    useEffect(()=> {
      // 컴포넌트가 언마운트되면 createObjectURL()을 통해 생성한 기존 URL을 폐기
      return () => {
        URL.revokeObjectURL(image.preview_URL)
        URL.revokeObjectURL(image1.preview_URL)
      }
    }, [])
  function F(e){
   console.log(IName)
   console.log(IName1)
  }
  const sendImageToServer=(e)=>{
    e.preventDefault();
    var API= "http://192.168.56.1:9000";
    M.net.http.upload({
      url:API+"/file/upload",
      header:{},
      params:{},
      body:[{ name:"file",content:image,type:"FILE"}],
      encoding:"UTF-8",
    })
    M.net.http.upload({
      url:API+"/file/upload",
      header:{},
      params:{},
      body:[{ name:"file",content:image1,type:"FILE"}],
      encoding:"UTF-8",
    })
    let body={
      Img1:id,
      address:"충북 청주시 서원구 충대로 1, 충북대학교",
      text:"안녕",
      title:"안녕",
      path:IName,
      path1:IName1,
    }
    dispatch(repairUpload(body))
    .then(response =>{
      if(response.payload.success){
      alert("신청이 완료되었습니다.");
      navigate("/Home");
    }
  })

    }

  function setIm(e){
    const M = window.M
    e.preventDefault();
    M.media.picker({
      mode:"SINGLE",
      media:"PHOTO",
      column:3,
      callback:function(status,result){
        if(status==="SUCCESS"){
          setImage(result.path);
          setIName(result.name);
        }
      }
      })
    }
    function setIm1(e){
      const M = window.M
      e.preventDefault();
      M.media.picker({
        mode:"SINGLE",
        media:"PHOTO",
        column:3,
        callback:function(status,result){
          if(status==="SUCCESS"){
            setImage1(result.path);
            setIName1(result.name);
          }
        }
        })
      }
    return(
      <div id="repair_back">
           <button onClick={F}>확인</button>
          <button onClick={sendImageToServer}></button>
      <div id = "package">
      <div id="repair_div1">
          <button id="repair_back_button" onClick={() => {navigate("/Home")}} >
          <img src={leftarrow} style={{ width: 40, height: 30 }} alt='화살표'  />
          </button>
          <div id="repair_text">복구 신청</div>
      </div>
      </div>


      <div id="repair_div2">
          <main className="container">
              <h2> 이미지 </h2>
              
      <div className="preview">
      </div>
         <button id = "repair_select"type="primary" onClick={setIm}>
    사진선택</button>
    <button id = "repair_select" type="primary" onClick={setIm1}>
    사진선택</button>
      </main>
      
         

      </div>

      <div id = "repair_div3">
      <label>
        <input type="text" id="repair_title" placeholder="제목을 작성하십시오." 
        value={title} 
        onChange={onChangeTitle}>
        </input>
       </label>
      
      <div id = "repair_div4">
      <input type="text" id="repair_address" placeholder="주소를 입력하시오." 
      value={enroll_company.address} 
      onChange={handleInput}>
        </input>
        <button type='button' id = "post_name"onClick={openPostCode}>우편번호 검색</button>
        <br></br>
        <br></br>
      </div>
     
      <div id='popupDom'>
          {isPopupOpen && (
              <PopupDom>
                  <PopupPostCode  company={enroll_company} setcompany={setEnroll_company} onClose={closePostCode} />
              </PopupDom>
          )}
      </div>
      </div>
      <div id = "repair_div5">
            
            <textarea id="repair_story" placeholder="내용을 입력하세요." rows="20"  cols="58"
             value={text} onChange={onChangeText}>
              
            </textarea>
            <button id="repair_button"  onClick={sendImageToServer}>
                    <img src={leftarrow} style={{ width: 30, height: 20 }} alt='화살표'  />
            </button>
            
            </div>
  </div>
)
}
export default Repair;