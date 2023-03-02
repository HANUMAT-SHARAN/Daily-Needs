import { loginApi, userobj } from "./authApi";
import {
  GET_USERS_DATA,
  LOGOUT_USER,
  SET_CURRENT_USER,
  UPDATE_CART_TOTAL,
} from "./authActionType";
import { Dispatch } from "redux";

export const getUsersData = () => async (dispatch: Dispatch) => {
  try {
    let response = await loginApi();

    dispatch({ type: GET_USERS_DATA, payload: response });
  } catch (error) {}
};

export const setCurrentUser = (userdata: userobj) => async (dispatch: any) => {
  dispatch({ type: SET_CURRENT_USER, payload: userdata });
};

export const makeUserLogout = () => (dispatch: any) => {
  dispatch({ type: LOGOUT_USER });
};
export const updateUserCart = (total: number) => (dispatch: any) => {
  dispatch({ type: UPDATE_CART_TOTAL, payload: total });
};
