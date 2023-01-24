import React from 'react'
import axios from "axios"
import { AxiosResponse } from 'axios'
import {userobj} from "../Pages/Signup"
import { Data } from '../Pages/MobileProducts'


export const productsApi=async()=>{
 let response:AxiosResponse<Data[]>=await axios.get(`https://backendsirver-for-daily-needs.vercel.app/products`)
  return response.data
}
