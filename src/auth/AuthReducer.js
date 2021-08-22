
import { types } from "../types/types";

export const AuthReducer = (state = {},action)=>{
    switch(action.type){
        
        case types.SetDetalle:
            return {
                ...state,
                detalle:true
            }
        case types.logout:
            return{
                logged:false
            }
        default:
            return state;
    }
}