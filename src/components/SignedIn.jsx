import { Route, Switch, Link } from "react-router-dom";
import AppContainer from "./AppContainer";
import AppHeader from "./AppHeader";

// pages for routing
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";

function SignedIn(props) {
  // for signing out and to get the current logged in user
  const { user, setLogin } = props;
  return (
    <AppContainer>
      <AppHeader>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/profile">Profile</Link>
      </AppHeader>
      <Switch>
        <Route path="/" exact>
          <Home></Home>
        </Route>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/profile">
          <Profile>
            <h1>Signed In {user}</h1>
            <button onClick={(_) => setLogin(false)}>Logout</button>
          </Profile>
        </Route>
      </Switch>
    </AppContainer>
  );
}

export default SignedIn;
