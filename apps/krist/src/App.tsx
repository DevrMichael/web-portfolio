import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login, ForgotPassword } from './authentication';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/forgot-password'} element={<ForgotPassword />} />
      </Routes>
    </>
  );
}

export default App;
