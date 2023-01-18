import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Homepage from '../Components/Homepage/Homepage'
import Signup from '../Pages/Signup'
import NotFound from '../Pages/NotFound'
import Login from '../Pages/Login'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route element={<Homepage/>} path="/" />
        <Route element={<Signup/>} path="/signup"/>
        <Route element={<NotFound/>} path="*"/>
        <Route element={<Login/>} path="/login"/>
        

      </Routes>
    </div>
  )
}

export default AllRoutes