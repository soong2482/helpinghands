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
              <Route path="/location" element={<Pages.location/>}/>
              <Route path="/privacy" element={<Pages.privacy/>}/>
              <Route path="/namechange" element={<Pages.namechange/>}/>
              <Route path="/agencychange" element={<Pages.agencychange/>}/>
              <Route path="/profilechange" element={<Pages.profilechange/>}/>
            </Routes>
          </Router>
      </React.StrictMode>
    )
}