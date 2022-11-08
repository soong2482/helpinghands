
import background from '../img/shortback.png';
import menu from '../img/menu.png'
import plus from '../img/plus.png';
import adv from '../img/adv.png';

function Home() {
    return (
        <div>
            <div id="div1">
                도움의손길
                모든 것이 너에게 달려 있다
                <button style={{ marginTop: 15 }}>
                    <img src={menu} id="menu" alt='메뉴' />
                </button>
            </div>

            <div id="div2">
                <button id="button">
                    봉사 신청
                </button>
            </div>
            <div id="div2">
                <button id="button2">
                    복구 신청
                </button>
                <button style={{ marginLeft: -150, marginTop: -80 }}>
                    실시간 지원 현황                                                                     <img src={plus} style={{ width: 15, height: 15 }} alt='플러스' />
                </button>

            </div>


            <div id="div3">
                <div id="divcol1"></div>
                <div id="divcol2"></div>
                <div id="divcol3"></div>

            </div>
            <div id="divcol4">
                <img src={adv} style={{ height: '100%', width: '100%' }} alt='광고' />
            </div>
        </div>
    );
};

export default Home;