import { UserActions } from "../constants/UserActions";
import { User } from "../model/User"

export const initialUserReducer:User = {
    id:-1,
    balance:0
}
export const userReducer  = (state = initialUserReducer,action = {type:0,payload:{movements:[],balance: 0}}):User  => {
    switch(action.type){
        case UserActions.LOGIN:
            return action.payload;
        case UserActions.LOGOUT:
            return initialUserReducer;
        case UserActions.UPDATE_MOVEMENTS:
            return {...state,movements:action.payload.movements};
        case UserActions.UPDATE_BALANCE:
            return {...state,balance:action.payload.balance};
    }
    return state;
}