import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Error from './pages/Error'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Layout from './components/Layout'
import Market from './pages/market/Market'
import NewLoginDetails from './pages/signup/NewLoginDetails'
import Contract from './pages/contract/ContractForm'


import CropDetails from './pages/market/components/CropDetails'
import T from './pages/fprofile/Fprofile'
import Terms from './pages/contract/Terms'
//import Chat from './pages/chat/Chat'
import CPROFILE from './pages/cprofile/cprofile'
import DetailsOfContract from './pages/cprofile/contractm'
import Status from './pages/status/Status'
import History from './pages/status/History'
import Contracts from './pages/status/Contracts'

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
        {path:"/cropdetail/:id",element:<CropDetails/>},
        {path:"/profile",element:<T/>},
        {path:"/terms",element:<Terms/>},
        //{path:"/chat",element:<Chat/>},
        {path:"/cprofile",element:<CPROFILE/>}
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