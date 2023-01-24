import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { store } from '../Redux/store'

const PrivateRoute = ({children}:any) => {
    const nav=useNavigate()
    const {isAuth}=useSelector((store:any)=>store.authManager)
    if(!isAuth){
      
        nav('/')
        window.location.reload()
        return 
    }
  return (
    <div>
      {children}
    </div>
  )
}

export default PrivateRoute
