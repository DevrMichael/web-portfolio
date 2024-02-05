import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login } from './authentication';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" />
        <Route path={'/login'} element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
