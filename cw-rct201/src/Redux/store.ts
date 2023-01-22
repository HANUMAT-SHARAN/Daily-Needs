import { legacy_createStore, compose, applyMiddleware,combineReducers } from "redux";

import thunk  from "redux-thunk";
import {authReducer} from "../Redux/auth/authReducer"

import { categoryreducer } from "./categorysorting/category.reducer";

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const rootReducer=combineReducers({
    authManager:authReducer,
    CatManager:categoryreducer

})

const composeEnhancer = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;

export const store =legacy_createStore(rootReducer,composeEnhancer(applyMiddleware(thunk)))