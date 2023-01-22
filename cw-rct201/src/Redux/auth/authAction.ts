import { loginApi, userobj } from "./authApi";
import { GET_USERS_DATA, LOGOUT_USER, SET_CURRENT_USER } from "./authActionType";
import { Dispatch } from "redux";

export const getUsersData = () => async (dispatch:Dispatch) => {
  try {
    let response = await loginApi();
    console.log(response,"res")
    dispatch({ type: GET_USERS_DATA, payload: response });
    console.log(response)
  } catch (error) {
    console.log("error ", error);
  }
};

export const setCurrentUser=(userdata:userobj)=>async(dispatch:any)=>{
    dispatch({type:SET_CURRENT_USER,payload:userdata})
}

export const makeUserLogout=()=>(dispatch:any)=>{
    dispatch({type:LOGOUT_USER})
}