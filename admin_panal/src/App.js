import React from 'react';
import { Routes, Route } from "react-router-dom";
import AddPost from './pages/AddPost';
import ForgotPassword from './partials/components/ForgotPassword';
import Login from './partials/components/Login';
import Signup from './partials/components/Signup';

function App() {
  return (
    <>
      <div className='app'>
        <Routes>
          <Route path='/add-post' element={<AddPost />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/reset-password' element={<ForgotPassword />} />
        </Routes>
      </div>
    </>
  )
}

export default App