import { GET_PRODUCTS_DATA, UPDATE_PRODUCT } from "./adminActionType";

import { productsApi } from "../../api/ProductsApi";
import { Dispatch } from "redux";

export const sendDataToRedux = () => async(dispatch: any) => {
  try {
let response=await productsApi()
dispatch({type:GET_PRODUCTS_DATA,payload:response})


  } catch (error) {
    console.log("error ", error);
  }
};
type objType={
  id:number,
  category:string
}

export const updateTodoFromDom=(obj:objType)=>(dispatch:any)=>{
  console.log(obj)
  dispatch({type:UPDATE_PRODUCT,payload:obj})
}