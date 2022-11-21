import "../css/agencychange.css"
import adv from '../img/adv.png';
import { useNavigate } from 'react-router-dom';
import leftarrow from '../img/leftarrow.png';

function Agencychange() {
  const navigate = useNavigate();
  return (
      <div id ="agencychange_back">
          <button id="agencychange_back_button" onClick={() => {navigate("/privacy")}} >
             <img src={leftarrow} style={{ width: 30, height: 20 }} alt='화살표' />
          </button>
          <div id="agencychange_profile_text">봉사 단체 변경</div>
          <div id="agencychange_div1">
            <h4>변경할 단체를 입력해주세요.</h4>
             <input id="agencychange_input" type="text" placeholder=""></input>
             <br></br><br></br><br></br><br></br>
             <button id="agencychange_button">봉사 단체 변경</button>
          </div>
          <div id="agencychange_div_adv">
              <img src={adv} style={{ height: '100%', width: '100%' }} alt='광고' />
          </div>
        </div>

  );
};

export default Agencychange;