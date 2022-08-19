import { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom";
import { ListMovements } from "../components/ListMovements";
import { TypeMovement } from "../constants/TypeMovement";
import { UserContext } from "../context/UserContext"
import { User } from "../model/User";
/*import { user } from "../model/user";
import { initialuserReducer } from "../reducers/userReducer";*/
import '../styles/Initial.css';
import '../styles/Dashboard.css';
import { NavDashboard } from "../components/NavDashboard";

export const Dashboard = () => {
    const {user} = useContext<{user:User,dispatch:any}>(UserContext);
    const historyHook = useHistory();
    useEffect(() => {
        if(user.id === -1){
            historyHook.replace({pathname:'/login'});
        } 
    },[user,historyHook]);
    return (
        <div>
            <NavDashboard/>
            <div className = "container">
                Bienvenido: <strong>{user.name} </strong>
                <br/>
                Balance: ${user.balance || "0"}
                <div>
                    <div className = "list-movements movement-income">
                        <ListMovements type = {TypeMovement.INGRESOS} movements = {user.movements?.filter((v)=>v.typeMovement.id === 1)}/>
                    </div>
                    <div className = "list-movements movement-egress">
                        <ListMovements type = {TypeMovement.EGRESOS} movements = {user.movements?.filter((v)=>v.typeMovement.id === 2)}/>
                    </div>
                </div>           
            </div>
        </div>
        
    )
}