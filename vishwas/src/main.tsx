import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import FarmerForm from './pages/signup/newlogin/newloginuser'
import Error from './pages/Error'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Logincf from './pages/login/logincf'
import Signup from './pages/signup/Signup'
import Layout from './components/Layout'
import Market from './pages/market/Market'
import NewLoginDetails from './pages/signup/NewLoginDetails'
import OrderForm from './pages/Contract/ContractForm'
import './locales/i18n';

import CropDetails from './pages/market/components/CropDetails'
import T from './pages/fprofile/Fprofile'
import TermsAndConditions from './pages/Contract/Terms';
import Chat from './pages/chat/Chat'
import CPROFILE from './pages/cprofile/cprofile'
import DetailsOfContract from './pages/cprofile/contractm'
import Request from './pages/market/components/RequestB'
import FarmerDetails from './pages/market/components/Farmerreq'
import CrequestFormm from './pages/createRequest/CrequestForm'
import Future from './pages/cprofile/Future'
import FStatus from './pages/fstatus/FStatus'
import Status from './pages/status/Status'
import History from './pages/status/History'
import Contracts from './pages/status/Contracts'
import AadhaarAuth from './pages/signup/AadhaarAuth'
import CrequestForm from './pages/contractor/CrequestForm'
import FaceDetection from './facedetection/face-api';
import Farbidings from './pages/cprofile/farbidings';
import NewLogin from './pages/newlogin/newLogin'
import FarmerProfile from './pages/Profile/FarmerProfile'
import ContractorProfile from './pages/cprofile/contractorProfile'
import CropContractForm from './pages/cprofile/CreateContract'
import { GlobalNLProvider } from './context/nlGlobalContext'
import { FormProvider } from './context/LandDetailsContext'
import { CompanyProvider } from './context/CompanyContext'

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
        {path:"/lcf",element:<Logincf/>},
        {path:"/profile/:mobileNumber",element:<FarmerProfile/>},
        {path:"/cprofile/:mobileNumber",element:<ContractorProfile/>},
        {path:"/createcontract",element:<CropContractForm/>},
        {path:"/market",element:<Market/>},
        {path:"/nld",element:<NewLoginDetails/>},
        {path:"/contract",element:<OrderForm/>},
        {path:"/doc",element:<DetailsOfContract/>},
        {path:"/status",element:<Status/>},
        {path:"/history",element:<History/>},
        {path:"/contracts",element:<Contracts/>},
        {path:"/farmerform",element:<FarmerForm/>},
        {path:"/cropdetail/:id",element:<CropDetails/>},
        {path:"/profile",element:<T/>},
        {path:"/terms",element:<TermsAndConditions/>},
        {path:"/chat",element:<Chat/>},
        {path:"/req",element:<Request/>},
        {path:"/creq",element:<CrequestFormm/>},
        {path:"/cprofile",element:<CPROFILE/>},
        {path:"/Future",element:<CrequestForm/>},
        {path:"/aauth",element:<AadhaarAuth/>},
        {path:"/fb",element:<Farbidings />},
        {path:"/face",element:<FaceDetection />},

        {path:"/fr",element:<FarmerDetails farmer={undefined} />},
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
)