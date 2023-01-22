import { GET_CATAGORY } from "./Category.actionTypes";

export const getcategory=(cat:string)=>(dispatch:any)=>{
    dispatch({type:GET_CATAGORY,payload:cat})
}