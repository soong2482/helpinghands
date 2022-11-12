import "../css/Mypage.css"
import adv from '../img/adv.png';
import profile from '../img/profil.png';
import human from '../img/human.png';
import alram from '../img/alram.png';
import protect from '../img/protect.png';
import participation from '../img/participation.png';
import recruitment from '../img/recruitment.png';
import logout from '../img/logout.png';
import rightarrow from '../img/rightarrow.png';
import { useNavigate } from 'react-router-dom';

function Mypage() {
  const navigate = useNavigate();
  return (
      <div id ="mypage_back">
          <div id="mypage_profile_text">프로필</div>
          <div id="mypage_profile">
            <img id="mypage_profile_img" src={profile} alt='프로필' />
            <div id="mypage_name">박세빈</div>
            <div id="mypage_agency">안동 행복 봉사 단체</div>
          </div>
          <button id="mypage_button1" onClick={() => {navigate("/")}} >
          &emsp;&emsp;<img src={human} style={{ width: 20, height: 20 }} alt='사람' />
                  &emsp;&emsp;
                  개인 정보
                  &nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                  <img src={rightarrow} style={{ width: 20, height: 20 }} alt='화살표' />
          </button>
          <button id="mypage_button2" onClick={() => {navigate("/")}}>
          &emsp;&emsp;<img src={alram} style={{ width: 20, height: 20 }} alt='알림' />
                  &emsp;&emsp;
                  알림 및 소리
                  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                  <img src={rightarrow} style={{ width: 20, height: 20 }} alt='화살표' />
          </button>
          <button id="mypage_button3" onClick={() => {navigate("/")}}>
          &emsp;&emsp;<img src={protect} style={{ width: 20, height: 20 }} alt='개인정보' />
                  &emsp;&emsp;
                  개인정보 보호 및 공유
                  &nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                  <img src={rightarrow} style={{ width: 20, height: 20 }} alt='화살표' />
          </button>
          <button id="mypage_button4" onClick={() => {navigate("/")}}>
          &emsp;&emsp;<img src={participation} style={{ width: 20, height: 20 }} alt='봉사 참여' />
                  &emsp;&emsp;
                  봉사 참여 확인
                  &nbsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                  <img src={rightarrow} style={{ width: 20, height: 20 }} alt='화살표' />
          </button>
          <button id="mypage_button5" onClick={() => {navigate("/")}}>
          &emsp;&emsp;<img src={recruitment} style={{ width: 20, height: 20 }} alt='봉사 모집' />
                  &emsp;&emsp;
                  봉사 모집 및 신청
                  &nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                  <img src={rightarrow} style={{ width: 20, height: 20 }} alt='화살표' />
          </button>
          <button id="mypage_button6" onClick={() => {navigate("/")}}>
          &emsp;&emsp;<img src={logout} style={{ width: 20, height: 20 }} alt='로그 아웃' />
                  &emsp;&emsp;
                  로그아웃
                  &nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                 
          </button>
          <div id="mypage_div_adv">
              <img src={adv} style={{ height: '100%', width: '100%' }} alt='광고' />
          </div>
        </div>

  );
};

export default Mypage;