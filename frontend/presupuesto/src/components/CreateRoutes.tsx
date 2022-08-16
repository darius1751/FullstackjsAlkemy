import { HashRouter,Route,Switch} from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
export const CreateRoutes = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path = "/login" exact = {true} >
                    <Login/>
                </Route>
                <Route path = '/register' exact = {true}>
                    <Register/>
                </Route>
            </Switch>
            <Route path = '/dashboard' exact = {true}>
                <Dashboard/>
            </Route>
        </HashRouter>
    )
}