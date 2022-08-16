import { CreateRoutes } from "./components/CreateRoutes";
import UserProvider from "./context/UserContext";
const App = ()=>{
  return (
    <div>
      <UserProvider>
          <CreateRoutes/>
      </UserProvider>
      
    </div>
  );
}

export default App;
