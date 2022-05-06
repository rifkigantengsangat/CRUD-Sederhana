import React from 'react'
import {Routes,Route } from 'react-router-dom';
import AddUser from './Comp/AddUser';
import Home from './Comp/Home';
import EditUser from './Comp/EditUser';

const App = () => {
  
  return (
    
    <div>
        <Routes>
        <Route path="/" element={<Home/> } />
        <Route path="/Add" element={<AddUser/>} /> 
        <Route path="/edit/:id"element={<EditUser/>} />
        </Routes>
    </div>
   
  )
}

export default App