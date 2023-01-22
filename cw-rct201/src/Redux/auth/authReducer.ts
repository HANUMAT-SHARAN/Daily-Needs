import { userobj } from "./authApi";
import { GET_USERS_DATA, LOGOUT_USER, SET_CURRENT_USER } from "./authActionType";
import { UPDATE_CART_TOTAL } from "./authActionType";
type authState = {
  loginUsersData: userobj[];
  currentUser: userobj;
  isAuth:boolean
  totalPrice:number
};

const initialState: authState = {
  currentUser: { name: "", lastname: "", email: "", password: "" },
  loginUsersData: [],
  isAuth:false,
  totalPrice: 0
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
    case UPDATE_CART_TOTAL:{
      return {
        ...state,totalPrice : action.payload
      }
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
