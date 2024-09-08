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
import Logincf from './pages/login/logincf';
import FarmerProfile from './pages/Profile/FarmerProfile';
import ContractorProfile from './pages/cprofile/contractorProfile';

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
        {path:"/cprofile/:mobileNumber",element:<ContractorProfile/>}
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
