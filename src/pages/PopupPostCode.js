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
        top: "-100%",
        right: "25%",
        width: "240px",
        height: "400px",
        padding: "7px",
        
      };
 
    return(
        <div id="popuppostcode_post">
            <DaumPostcode style={postCodeStyle} onComplete={handlePostCode} />
        </div>
    )
}
 
export default PopupPostCode;