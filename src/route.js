import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pages from "./pages";

export default function routes(){
    return (
        <React.StrictMode>
          <Router>
            <Routes>
              <Route path="/Home" element={<Pages.Home/>} />
              <Route path="/" element={<Pages.firstpage/>}/>
              <Route path="/notice" element={<Pages.notice/>}/>
              <Route path="/help" element={<Pages.help/>}/>
              <Route path="/repair" element={<Pages.repair/>}/>
              <Route path="/SignIn" element={<Pages.SignIn/>}/>
              <Route path="/SignUp" element={<Pages.SignUp/>}/>
              <Route path="/mypage" element={<Pages.mypage/>}/>

            </Routes>
          </Router>
      </React.StrictMode>
    )
}