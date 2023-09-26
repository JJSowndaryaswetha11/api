import React, { useEffect, useState } from 'react';
import './App.css'
import { Navbar } from './Components/Navbar';
import {Routes,Route} from 'react-router-dom'

import LoginForm from './Pages/Login';
import Details from './Pages/Details'
import Signup from './Pages/Signup'
import Home from './Pages/Home';


function App() {
  
  return (
    <div className='Apps'> <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/details' element={<Details/>}/>
    
      <Route path='/login' element={<LoginForm/>} />
      <Route path='/signup' element={<Signup/>} />
      
      
    </Routes>
    
    </div>
  
  )
}

export default App;