// src/components/Register.js
import { useState,useRef } from "react";

const Register = () => {
  const [RegisterUser,setRegisterUser]=useState({
    name:"",
    email:"",
    password:"",
    password:""
  });

  const handleRegister= async (e)=>{
      e.preventDefault();
  }
  return (
    <section className="bg-gray-900 h-screen">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-3xl font-bold leading-tight tracking-tight md:text-2xl text-white text-center">
          Register
        </h1>
        <form className="space-y-4 md:space-y-6" action="#">
          <div>
            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your username</label>
            <input
              type="text"
              name="username"
              id="username"
              className="rounded-lg block w-full p-2.5 bg-gray-700 placeholder-gray-400 text-white focus:ring-blue-500 border-blue-500"
              placeholder="Enter your username"
              required=""
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="rounded-lg block w-full p-2.5 bg-gray-700 placeholder-gray-400 text-white focus:ring-blue-500 border-blue-500"
              placeholder="Enter your email"
              required=""
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="rounded-lg block w-full p-2.5 bg-gray-700 placeholder-gray-400 text-white focus:ring-blue-500 border-blue-500"
              placeholder="Create a password"
              required=""
            />
          </div>
          <div>
            <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              className="rounded-lg block w-full p-2.5 bg-gray-700 placeholder-gray-400 text-white focus:ring-blue-500 border-blue-500"
              placeholder="Confirm your password"
              required=""
            />
          </div>
          <button type="submit" className="w-full text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
            Sign Up
          </button>
          <p className="text-sm font-light text-gray-400">
            Already have an account? <a href="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign In</a>
          </p>
        </form>
      </div>
    </div>
  </div>
</section>

  
  
  );
};

export default Register;
