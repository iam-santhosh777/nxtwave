// LoginPage.js
import React from 'react';
import nxtwave_logo from '../../assets/NxtWave TM_Coloured logo 1.png';
import LoginForm from './LoginForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-white">
      <ToastContainer position="top-center" />
      <div className="w-[50%] md:w-[50%] py-8 flex justify-center items-center">
        <img src={nxtwave_logo} alt="NxtWave Logo" className="w-[50%] h-auto" />
      </div>
      <div className="w-[75%] md:w-[25%] p-8 shadow-lg rounded-lg">
        <h1 className="text-2xl mb-4 text-center">Login / SignUp</h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
