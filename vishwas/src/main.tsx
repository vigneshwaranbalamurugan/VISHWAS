import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { GlobalNLProvider } from '../src/context/nlGlobalContext';
import { FormProvider } from '../src/context/LandDetailsContext';
import { CompanyProvider } from './context/CompanyContext';
import './index.css';
import './locales/i18n';
import Error from './pages/Error';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Layout from './components/Layout';
import NewLogin from './pages/newlogin/newLogin';
import FarmerProfile from './pages/Profile/FarmerProfile';
import ContractorProfile from './pages/cprofile/contractorProfile';
import CropContractForm from './pages/cprofile/CreateContract';

import CropDetails from './pages/market/components/CropDetails'
import T from './pages/fprofile/Fprofile'
import Terms from './pages/contract/Terms'
import Chat from './pages/chat/Chat'
import CPROFILE from './pages/cprofile/cprofile'
import DetailsOfContract from './pages/cprofile/contractm'
import Request from './pages/market/components/RequestB'
import FarmerDetails from './pages/market/components/Farmerreq'

import Future from './pages/cprofile/Future'
import FStatus from './pages/fstatus/FStatus'
import Status from './pages/status/Status'
import History from './pages/status/History'
import Contracts from './pages/status/Contracts'
import AadhaarAuth from './pages/signup/AadhaarAuth'
import CrequestForm from './pages/contractor/CrequestForm'
import FaceDetection from './facedetection/face-api';
import Farbidings from './pages/cprofile/farbidings';

const router = createBrowserRouter(
  [
    {
      path:'/',
      element:<Layout/>,
      errorElement:<Error/>,
      children:[
        {index:true, element:<Home />},
        {path:"/login",element:<Login/>},
        {path:"/signup",element:<Signup/>},
        { path:'/sidebar', element: <NewLogin /> },        
        {path:"/profile/:mobileNumber",element:<FarmerProfile/>},
        {path:"/cprofile/:mobileNumber",element:<ContractorProfile/>},
        {path:"/createcontract",element:<CropContractForm/>},
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
        {path:"/req",element:<Request/>},
        {path:"/cprofile",element:<CPROFILE/>},
        {path:"/Future",element:<CrequestForm/>},
        {path:"/aauth",element:<AadhaarAuth/>},
        {path:"/fb",element:<Farbidings />},
        {path:"/face",element:<FaceDetection />},

        {path:"/fr",element:<FarmerDetails />},
        {path:"/fstatus",element:<FStatus/>},

        

        


        
      ]
    }
  ]
)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <GlobalNLProvider>
    <FormProvider>
      <CompanyProvider>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
      </CompanyProvider>
    </FormProvider>
  </GlobalNLProvider>
);
