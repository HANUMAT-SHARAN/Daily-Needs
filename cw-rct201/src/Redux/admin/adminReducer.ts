import { Data } from "../../Pages/MobileProducts";
import { GET_PRODUCTS_DATA, UPDATE_PRODUCT } from "./adminActionType";

type initialState = {
  productsData: Data[];
};

const productState: initialState = {
  productsData: [],
};
type authAction = {
  type: string;
  payload: any;
};

export const productReducer = (
  state: initialState = productState,
  action: authAction
) => {
  switch (action.type) {
    case GET_PRODUCTS_DATA: {
      return {
        ...state,
        productsData: action.payload,
      };
    }
    case UPDATE_PRODUCT:{
      return{
        ...state,
        productsData:state.productsData.map((el)=>{
          if(el.id==action.payload.id){
              return {
               ...el,
                  ...action.payload
              }
          }
          return el
      })
      }
    }
    default: {
      return state;
    }
  }
};
