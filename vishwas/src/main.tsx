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


import Logincf from './pages/login/logincf';
import Market from './pages/market/Market';
import NewLoginDetails from './pages/signup/NewLoginDetails';
import Contract from './pages/contract/ContractForm';

import CropDetails from './pages/market/components/CropDetails';
import T from './pages/fprofile/Fprofile';
import Terms from './pages/contract/Terms';
import Chat from './pages/chat/Chat';
import CPROFILE from './pages/cprofile/cprofile';
import DetailsOfContract from './pages/cprofile/contractm';
import FarmerDetails from './pages/market/components/Farmerreq';



import Future from './pages/cprofile/Future'

import Status from './pages/status/Status'
import History from './pages/status/History'
import Contracts from './pages/status/Contracts'
import AadhaarAuth from './pages/signup/AadhaarAuth'
import CrequestForm from './pages/contractor/CrequestForm'
import FaceDetection from './facedetection/face-api';

const router = createBrowserRouter(
  [
    {
      path:'/',
      element:<Layout/>,
      errorElement:<Error/>,
      children:[
        {index:true, element:<Home />},
        {path:"/login",element:<Login/>},
        {path:"/lcf",element:<Logincf/>},
        {path:"/signup",element:<Signup/>},
        {path:"/market",element:<Market/>},
        {path:"/nld",element:<NewLoginDetails/>},
        {path:"/contract",element:<Contract/>},
        {path:"/doc",element:<DetailsOfContract/>},
        {path:"/status",element:<Status/>},
        {path:"/history",element:<History/>},
        {path:"/contracts",element:<Contracts/>},
        {path:"/farmerform",element:<FarmerForm/>},
        {path:"/cropdetail/:id",element:<CropDetails/>},
        {path:"/profile",element:<T/>},
        {path:"/terms",element:<Terms/>},
        {path:"/chat",element:<Chat/>},

        {path:"/cprofile",element:<CPROFILE/>},
        {path:"/Future",element:<CrequestForm/>},
        {path:"/aauth",element:<AadhaarAuth/>},
        
        { path: '/login', element: <Login /> },
        { path: '/signup', element: <Signup /> },
        { path: '/sidebar', element: <NewLogin /> },
        { path: '/face', element: <FaceRecognition /> },
        { path: '/n', element: <FarmerForm /> },
        {path:"/face",element:<FaceDetection />},
        {path:"/fr",element:<FarmerDetails />},
        


        
      ]
    }
  ]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GlobalNLProvider>
    <FormProvider>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </FormProvider>
  </GlobalNLProvider>
);
