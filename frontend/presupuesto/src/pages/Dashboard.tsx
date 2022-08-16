import { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom";
import { UserContext } from "../context/UserContext"
/*import { User } from "../model/User";
import { initialUserReducer } from "../reducers/UserReducer";*/


export const Dashboard = () => {
    const {user} = useContext<any>(UserContext);
    const historyHook = useHistory();
    useEffect(() => {
        if(user.id === -1)
            historyHook.replace({pathname:'/login'});
    });
    return (
        <div>
            Welcome: {user.name}
        </div>
    )
}