import React from 'react'
import axios from "axios"
import { AxiosResponse } from 'axios'

export type userobj = {
    name: string;
    lastname: string;
    email: string;
    password: string;
    cart?:[];
    datasets?:string[]
  };
  

export const loginApi=async()=>{
 let response:AxiosResponse<userobj[]>=await axios.get(`https://backendsirver-for-daily-needs.vercel.app/users`)
  return response.data
}