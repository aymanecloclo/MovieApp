// src/components/Register.js
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import 'react-toastify/dist/ReactToastify.css'; 
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

const Register = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required('Required')
        .min(2, 'Must be 2 characters or more'),
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .required('Required')
        .min(8, 'Must be 8 characters or more'),
      passwordConfirmation: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Required'),
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/register', values);
        toast.success('Registration successful!');
        console.log(response.data);
      } catch (error) {
        toast.error('Registration failed!');
        console.error(error);
      }
    },
  });

  return (
    <section className="bg-gray-900 h-screen">
      <ToastContainer />
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-3xl font-bold leading-tight tracking-tight md:text-2xl text-white text-center">
              Register
            </h1>
            <form onSubmit={formik.handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your username</label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.username}
                  className={`rounded-lg block w-full p-2.5 ${formik.errors.username && formik.touched.username ? 'border-red-500' : 'border-blue-500'} bg-gray-700 placeholder-gray-400 text-white`}
                  placeholder="Enter your username"
                />
                {formik.touched.username && formik.errors.username ? <div className="text-red-500">{formik.errors.username}</div> : null}
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className={`rounded-lg block w-full p-2.5 ${formik.errors.email && formik.touched.email ? 'border-red-500' : 'border-blue-500'} bg-gray-700 placeholder-gray-400 text-white`}
                  placeholder="Enter your email"
                />
                {formik.touched.email && formik.errors.email ? <div className="text-red-500">{formik.errors.email}</div> : null}
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  className={`rounded-lg block w-full p-2.5 ${formik.errors.password && formik.touched.password ? 'border-red-500' : 'border-blue-500'} bg-gray-700 placeholder-gray-400 text-white`}
                  placeholder="Create a password"
                />
                {formik.touched.password && formik.errors.password ? <div className="text-red-500">{formik.errors.password}</div> : null}
              </div>
              <div>
                <label htmlFor="passwordConfirmation" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                <input
                  id="passwordConfirmation"
                  name="passwordConfirmation"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.passwordConfirmation}
                  className={`rounded-lg block w-full p-2.5 ${formik.errors.passwordConfirmation && formik.touched.passwordConfirmation ? 'border-red-500' : 'border-blue-500'} bg-gray-700 placeholder-gray-400 text-white`}
                  placeholder="Confirm your password"
                />
                {formik.touched.passwordConfirmation && formik.errors.passwordConfirmation ? <div className="text-red-500">{formik.errors.passwordConfirmation}</div> : null}
              </div>
              <button type="submit" className="w-full text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
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
