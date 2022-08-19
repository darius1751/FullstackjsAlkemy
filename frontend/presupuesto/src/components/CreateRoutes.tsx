import { HashRouter,Route,Switch} from "react-router-dom";
import { CreateMovement } from "../pages/CreateMovement";
import { Dashboard } from "../pages/Dashboard";
import { Index } from "../pages/Index";
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
            <Route path = '/dashboard/create_movement' exact = {true}>
                <CreateMovement/>
            </Route>
            <Route path = '/' exact = {true}>
                <Index/>
            </Route>
        </HashRouter>
    )
}