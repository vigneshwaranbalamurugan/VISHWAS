import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import firebase from 'firebase/app';
import firebase/firestore;
import 'firebase/auth';

import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';

import Error from './pages/Error'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Layout from './components/Layout'
import Market from './pages/market/Market'
import NewLoginDetails from './pages/signup/NewLoginDetails'
import Contract from './pages/signup/contract'
import CropDetails from './pages/market/components/CropDetails'
// import FarmerProfile from './pages/profile/Test'
import T from './pages/profile/T'
import Terms from './pages/Contract/Terms'
import Chat from './pages/chat/Chat'

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBp0poIb8qDb3XB4_JgkGg32lrTXN2-J6s",
  authDomain: "bhoomichat.firebaseapp.com",
  projectId: "bhoomichat",
  storageBucket: "bhoomichat.appspot.com",
  messagingSenderId: "620460022149",
  appId: "1:620460022149:web:61e43244ce938a64a94cec",
  measurementId: "G-0P04GNWDCD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
        {path:"/cropdetail/:id",element:<CropDetails/>},
        {path:"/profile",element:<T/>},
        {path:"/terms",element:<Terms/>},
        // {path:"/chat",element:<Chat/>},
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