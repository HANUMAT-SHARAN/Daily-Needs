import { loginApi, userobj } from "./authApi";
import { GET_USERS_DATA, LOGOUT_USER, SET_CURRENT_USER } from "./authActionType";
import { UPDATE_CART_TOTAL } from "./authActionType";
export const getUsersData = () => async (dispatch: any) => {
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
export const setNewCartPrice=(ele:number)=>(dispatch:any)=>{
  dispatch({type:UPDATE_CART_TOTAL,payload:ele})
}