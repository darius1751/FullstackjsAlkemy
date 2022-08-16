import { UserActions } from "../constants/UserActions";
import { User } from "../model/User"

export const initialUserReducer:User = {
    id:-1
}
export const userReducer = (state = initialUserReducer,action = {type:0,payload:{}}):User  => {
    switch(action.type){
        case UserActions.LOGIN:
            return action.payload;
    }
    return state;
}