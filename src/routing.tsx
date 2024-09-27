import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage';
import App from './App';
import ProfilePage from './pages/pofilePage';
function Routing() {
  return (
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/homepage" element={<HomePage/>} />
        <Route path="/profilepage" element={<ProfilePage/>} />
      </Routes>
  );
}

export default Routing;
