import { createContext, useReducer } from "react";
import { initialUserReducer, userReducer } from "../reducers/UserReducer";
export const UserContext = createContext<any>({});

const UserProvider = ({children = (<></>)}) =>{
    const [user,dispathUser] = useReducer(userReducer,initialUserReducer);
    return (
        <UserContext.Provider value = {{user,dispathUser}}>
                {children}
        </UserContext.Provider>
    )
};
export default UserProvider;