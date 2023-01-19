import React from 'react'
import axios from "axios"
import { AxiosResponse } from 'axios'
import {userobj} from "../Pages/Signup"


export const loginApi=async()=>{
 let response:AxiosResponse<userobj[]>=await axios.get(`http://localhost:4040/users`)
  return response.data
}
