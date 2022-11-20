import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pages from "./pages";

export default function routes(){
    return (
        <React.StrictMode>
          <Router>
            <Routes>
              <Route path="/home" element={<Pages.Home/>} />
              <Route path="/mypage" element={<Pages.mypage/>} />
              <Route path="/" element={<Pages.firstpage/>}/>
              <Route path="/notice" element={<Pages.notice/>}/>
              <Route path="/help" element={<Pages.help/>}/>
              <Route path="/repair" element={<Pages.repair/>}/>
              <Route path="/SignIn" element={<Pages.SignIn/>}/>
              <Route path="/SignUp" element={<Pages.SignUp/>}/>
              <Route path="/realtime" element={<Pages.realtime/>}/>
              <Route path="/KakaoMap" element={<Pages.KakaoMap/>}/>
              <Route path="/realtimedetail" element={<Pages.realtimedetail/>}/>
              <Route path="/noticedetail" element={<Pages.noticedetail/>}/>
            </Routes>
          </Router>
      </React.StrictMode>
    )
}