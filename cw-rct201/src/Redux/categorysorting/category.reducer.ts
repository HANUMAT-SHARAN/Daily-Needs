import { type } from "os"
import { GET_CATAGORY } from "./Category.actionTypes"
type categoryaction ={
    type:string,
    payload?:string
}

type stateR= {
   category:string 
}
let initials:stateR={
    category:"bag"
} 
export  const categoryreducer = (state:stateR=initials,{type,payload}:categoryaction) => {
    switch(type){
        case GET_CATAGORY : {
            return {
                ...state,
                category:payload
            }
        }
        default :{
            return state
        }
    }
  
}


