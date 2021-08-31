import NavBar from "./Components/NavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import AddUser from "./Pages/AddUser";
import Users from "./Pages/Users";
import ErrorPage from "./Pages/ErrorPage";
import EditUser from "./Pages/EditUser";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/add" component={AddUser} />
          <Route exact path="/all" component={Users} />
          <Route exact path="/edit/:id" component={EditUser} />
          <Route component={ErrorPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
