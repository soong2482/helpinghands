import "../css/Home.css"
import menu from '../img/menu.png'
import plus from '../img/plus.png';
import adv from '../img/adv.png';
import profile from '../img/profil.png';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  return (
      <div id ="Home_back">
          <div id="Home_div1">
              <div id="Home_text1">도움의손길</div>
              <div id="Home_text2">모든 것이 너에게 달려 있다</div>
              <button id="Home_button_menu" style={{ marginTop: 15 }}>
              <img src={menu} id="Home_menu" alt='메뉴' />
              </button>
          </div>

          <div id="Home_div2" >
              <button id="Home_button1" onClick={() => {navigate("/help")}}>
                  봉사 신청
              </button>
              <button id="Home_button2" onClick={() => {navigate("/repair")}}>
                  복구 신청
              </button>
          </div>
          <div id ="Home_div_realtime">
              <button id="Home_button_realtime" style={{ marginLeft: -150, marginTop: -80 }} onClick={() => {navigate("/")}}>
                  실시간 지원 현황  
                 &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                  <img src={plus} style={{ width: 15, height: 15 }} alt='플러스' />
              </button>
          </div>
          <div id="Home_grid">
              <div id="Home_divcol">item1</div>
              <div id="Home_divcol">item2</div>
              <div id="Home_divcol">item3</div>
              <div id="Home_divcol">item4</div>
          </div>
          <div id="Home_month">
          <button id="Home_button_month" style={{ marginLeft: -150, marginTop: -80 }} onClick={() => {navigate("/")}}>
                  이달의 봉사자
                  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                  <img src={plus} style={{ width: 15, height: 15 }} alt='플러스' />
          </button>
          </div>
          <div id="Home_grid1">
              <div id="Home_month_name"><h1>박세빈 </h1> </div><p></p>
              <div id="Home_month_time">한달의 봉사 시간 : 65시간</div><p></p>
              <div id="Home_month_agency">소속 : 안동 행복 봉사 단체</div>
              <img id="Home_month_profile" src={profile} alt='프로필' />
          </div>
          <div id="Home_month">
          <button id="Home_button_notice" style={{ marginLeft: -150, marginTop: -80 }} onClick={() => {navigate("/notice")}}>
                  공지 사항
                  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; &emsp;&emsp;
                  <img src={plus} style={{ width: 15, height: 15 }} alt='플러스' />
          </button>
          <div id="Home_grid2">
              <div id="Home_divcol">item1</div>
              <div id="Home_divcol">item2</div>
              <div id="Home_divcol">item3</div>
              <div id="Home_divcol">item4</div>
              <div id="Home_divcol">item5</div>
              <div id="Home_divcol">item6</div>
          </div>
          </div>
          <div id="Home_divcol4">
              <img src={adv} style={{ height: '100%', width: '100%' }} alt='광고' />
          </div>
      </div>
  );
};

export default App;