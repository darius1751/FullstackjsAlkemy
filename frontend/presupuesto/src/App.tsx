import { HashRouter,Route,Switch} from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

const App = ()=>{
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route path="/login" exact={true} >
            <Login/>
          </Route>
          <Route path='/register' exact={true}>
            <Register/>
          </Route>
        </Switch>
        
      </HashRouter>
      
    </div>
  );
}

export default App;
