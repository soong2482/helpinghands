import React from 'react';
import DaumPostcode from "react-daum-postcode";
import "../css/popuppostcode.css"
const PopupPostCode = (props) => {
   // 우편번호 검색 후 주소 클릭 시 실행될 함수, data callback 용
    const handlePostCode = (data) => {
        let fullAddress = data.address;
        let extraAddress = ''; 
        
        if (data.addressType === 'R') {
          if (data.bname !== '') {
            extraAddress += data.bname;
          }
          if (data.buildingName !== '') {
            extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
          }
          fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        console.log(data)
        console.log(fullAddress)
        console.log(data.zonecode)
        props.setcompany({
            ...props.company,
            address:fullAddress,
        })
    }
 
    const postCodeStyle = {
        display: "block",
        position: "absolute",
        top: "6%",
        right: "28%",
        width: "530px",
        height: "370px",
        padding: "7px",
        
      };
 
    return(
        <div>
            <DaumPostcode style={postCodeStyle} onComplete={handlePostCode} />
            <button type='button' id ="postCode_btn" onClick={() => {props.onClose()}} className='postCode_btn'>닫기</button>
        </div>
    )
}
 
export default PopupPostCode;