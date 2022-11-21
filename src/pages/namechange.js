import "../css/namechange.css"
import adv from '../img/adv.png';
import { useNavigate } from 'react-router-dom';
import leftarrow from '../img/leftarrow.png';

function Namechange() {
  const navigate = useNavigate();
  return (
      <div id ="namechange_back">
          <button id="namechange_back_button" onClick={() => {navigate("/privacy")}} >
             <img src={leftarrow} style={{ width: 30, height: 20 }} alt='화살표' />
          </button>
          <div id="namechange_profile_text">이름 변경</div>
          <div id="namechange_div1">
            <h4>변경할 이름을 입력해주세요.</h4>
             <input id="namechange_input" type="text" placeholder=""></input>
             <br></br><br></br><br></br><br></br>
             <button id="namechange_button">이름 변경</button>
          </div>
          <div id="namechange_div_adv">
              <img src={adv} style={{ height: '100%', width: '100%' }} alt='광고' />
          </div>
        </div>

  );
};

export default Namechange;