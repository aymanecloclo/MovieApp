// src/components/Login.js
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useContext } from 'react';
import { UserContext } from './UserProvider';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import bg from '../assets/images/bg-login.jpg';
const Login = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Adresse e-mail invalide').required('Requis'),
      password: Yup.string().required('Requis'),
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/login', values);
        toast.success('Connexion réussie !');
        setUser({ email: values.email }); // Mettez ici l'objet utilisateur selon votre contexte
        navigate(`/Profile/${response.data.userId}`); // Assurez-vous d'avoir un userId dans la réponse
      } catch (error) {
        if (error.response) {
          toast.error('Échec de la connexion : ' + error.response.data.message);
        } else {
          toast.error('Erreur : ' + error.message);
        }
      }
    },
  });
  const styleBackground = {
    background: `url(${bg})`, // URL de l'image de fond
    backgroundSize: 'cover', // Ajuste l'image de fond pour couvrir tout l'élément
    backgroundPosition: 'center', // Centre l'image de fond
    backgroundRepeat: 'no-repeat', // Empêche la répétition de l'image de fond
  };
  

  return (
    <section className="bg-gray-900 h-screen" style={styleBackground}>
      <ToastContainer />
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-3xl font-bold leading-tight tracking-tight md:text-2xl text-white text-center">Login</h1>
            <form onSubmit={formik.handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className="rounded-lg block w-full p-2.5 bg-gray-700 placeholder-gray-400 text-white focus:ring-blue-500 border-blue-500"
                  placeholder="Enter your email"
                  
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500">{formik.errors.email}</div>
                ) : null}
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  className="rounded-lg block w-full p-2.5 bg-gray-700 placeholder-gray-400 text-white focus:ring-blue-500 border-blue-500"
                  placeholder="Enter your password"
                  
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-red-500">{formik.errors.password}</div>
                ) : null}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border rounded dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-300">Remember me</label>
                  </div>
                </div>
                <a href="#" className="text-sm font-medium hover:underline dark:text-primary-500">Forgot password?</a>
              </div>
              <button type="submit" className="w-full text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Sign in</button>
              <p className="text-sm font-light text-gray-400">
                Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
