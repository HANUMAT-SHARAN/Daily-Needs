import { userobj } from "./authApi";
import { GET_USERS_DATA, LOGOUT_USER, SET_CURRENT_USER } from "./authActionType";

type authState = {
  loginUsersData: userobj[];
  currentUser: userobj;
  isAuth:boolean
};

const initialState: authState = {
  currentUser: { name: "", lastname: "", email: "", password: "" },
  loginUsersData: [],
  isAuth:false
};
type authAction = {
  type: string;
  payload?: string;
};

export const authReducer = (
  state: authState = initialState,
  action: authAction
) => {
  switch (action.type) {
    case GET_USERS_DATA: {
      return {
        ...state,
        loginUsersData: action.payload,
      };
    }
    case SET_CURRENT_USER:{
        return {
            ...state,
            isAuth:true,
            currentUser:action.payload
        }
    }
    case LOGOUT_USER:{
        return {
            ...state,
            isAuth:false,
            currentUser:{ name: "", lastname: "", email: "", password: "" }
        }
    }
    default: {
      return initialState;
    }
  }
};
