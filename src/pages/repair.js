
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
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [I,setI]=useState();
  const[I1,setI1]=useState();
  const [path,setPath]=useState();
  const [path1,setPath1]=useState();
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
  const sendImageToServer=(e)=>{
    e.preventDefault();
    let body={
      Img1:id,
      address:enroll_company.address,
      text:text,
      title:title,
      path:path,
      path1:path1,
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
    var API= "http://172.20.10.3:9000";
    e.preventDefault();
    M.media.picker({
      mode:"SINGLE",
      media:"PHOTO",
      column:3,
      callback:function(status,result){
        if(status==="SUCCESS"){
          setImage(result.path);
          var filePath = result.path;
            M.net.http.upload({
              url:API+"/file/upload",
              header:{},
              params:{},
              body:[{ name:"file",content:filePath,type:"FILE"}],
              encoding:"UTF-8",
              finish: function(status,header,body,setting){
                if(status==200){
                  var resBody = JSON.parse(body);
                  var imgSrc = API + resBody.path;
                  setI(imgSrc);
                  setPath(resBody.path.substr(7))
                }
              }
            })
        }
      }
      })
    }
    function setIm1(e){
         var API= "http://172.20.10.3:9000";
      e.preventDefault();
      M.media.picker({
        mode:"SINGLE",
        media:"PHOTO",
        column:3,
        callback:function(status,result){
          if(status==="SUCCESS"){
            setImage1(result.path);
            var filePath = result.path;
            M.net.http.upload({
              url:API+"/file/upload",
              header:{},
              params:{},
              body:[{ name:"file",content:filePath,type:"FILE"}],
              encoding:"UTF-8",
              finish: function(status,header,body,setting){
                if(status==200){
                  var resBody = JSON.parse(body);
                  var imgSrc = API + resBody.path;
                  setI1(imgSrc);
                  setPath1(resBody.path.substr(7))
                }
              }
            })
          }
        }
        })
      }
      return(
        <div id="repair_back">
          
        <div id="repair_div1">
            <button id="repair_back_button" onClick={() => {navigate("/Home")}} >
            <img src={leftarrow} style={{ width: 40, height: 30 }} alt='화살표'  />
            </button>
            <div id="repair_text">복구 신청</div>
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
        <div id="repair_img2">
        <img src={I} id = "repair_img"  style={{ width: 150, height: 180 }} alt="사진"></img>
        <img src={I1} id = "repair_img" style={{ width: 150, height: 180 }}alt="사진"></img>
        </div>
  
        </div>
  
        <div id = "repair_div3">
          <input type="text" id="repair_title" placeholder="제목을 작성하십시오." 
          value={title} 
          onChange={onChangeTitle}>
          </input>
        
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
                    <PopupPostCode id="repair_post"  company={enroll_company} setcompany={setEnroll_company} onClose={closePostCode} />
                </PopupDom>
            )}
        </div>
        </div>
        <div id = "repair_div5">
              
              <textarea id="repair_story" placeholder="내용을 입력하세요." rows="30"  cols="58"
               value={text} onChange={onChangeText}>
                
              </textarea>
              <button id="repair_button"  onClick={sendImageToServer}>
                신청 완료
              </button>
              
              </div>
    </div>
  )
  }
  
export default Repair;