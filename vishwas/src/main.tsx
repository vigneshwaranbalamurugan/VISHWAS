import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import FarmerForm from './pages/signup/newlogin/newloginuser'
import Error from './pages/Error'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Layout from './components/Layout'
import Market from './pages/market/Market'
import NewLoginDetails from './pages/signup/NewLoginDetails'
import Contract from './pages/contract/ContractForm'
import './locales/i18n';

import CropDetails from './pages/market/components/CropDetails'
import T from './pages/fprofile/Fprofile'
import Terms from './pages/contract/Terms'
import Chat from './pages/chat/Chat'
import CPROFILE from './pages/cprofile/cprofile'
import DetailsOfContract from './pages/cprofile/contractm'


import Future from './pages/cprofile/Future'

import Status from './pages/status/Status'
import History from './pages/status/History'
import Contracts from './pages/status/Contracts'
import AadhaarAuth from './pages/signup/AadhaarAuth'

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
        {path:"/Future/:id",element:<Future/>},
        {path:"/aauth",element:<AadhaarAuth/>},

        {path:"/face",element:<FaceDetection />},
      ]
    }
  ]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)