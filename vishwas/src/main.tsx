import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { GlobalNLProvider } from '../src/context/nlGlobalContext';
import { FormProvider } from '../src/context/LandDetailsContext';
import Error from './pages/Error';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Layout from './components/Layout';
import NewLogin from './pages/newlogin/newLogin';
import FarmerForm from './pages/signup/newlogin/newloginuser';
import FaceRecognition from './facedetection/facedetection';
import './locales/i18n';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: '/login', element: <Login /> },
      { path: '/signup', element: <Signup /> },
      { path: '/sidebar', element: <NewLogin /> },
      { path: '/face', element: <FaceRecognition /> },
      { path: '/n', element: <FarmerForm /> },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <GlobalNLProvider>
    <FormProvider>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </FormProvider>
  </GlobalNLProvider>
);
