import React from 'react'

import './App.css'
import Home from './components/Home/Home'
import Courses from './components/Courses/courses'
import{ BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import SignUp from './components/SignUp'
import About from './components/About'
import ContactUs from './components/Contact/ContactUs'
import AboutUs from './components/About/AboutUs'
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'


function App() {
 const[authUser,setAuthUser] = useAuth();
 console.log(authUser);

  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/course" element={authUser?<Courses/>:<Navigate to="/signup"/>}></Route>
    <Route path="/signup" element={<SignUp/>}></Route>
    <Route path="/contact" element={<ContactUs/>}></Route>
    <Route path="/about" element={<AboutUs/>}></Route>
   </Routes>
   </BrowserRouter>
   <Toaster />
    
    </>
  )
}

export default App
