import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./main.scss";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Home from "./components/Home/Home";
import Navbar from "./components/navbar/Navbar";
import Dashboard from "./components/shared/Dashboard";
import PrivateRoute from "./private/PrivateRoute";
import RouteLinks from "./private/RouteLinks";
import NotFound from "./components/notFound/NotFound";
import { HelmetProvider } from "react-helmet-async";
function App() {
  return (
    <Router>
      <HelmetProvider>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <RouteLinks exact path="/register" component={Register} />
          <RouteLinks exact path="/login" component={Login} />
          <PrivateRoute path="/dashboard" exact component={Dashboard} />
          <Route component={NotFound} />
        </Switch>
      </HelmetProvider>
    </Router>
  );
}

export default App;
