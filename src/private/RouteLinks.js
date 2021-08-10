import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Dashboard from "../components/shared/Dashboard";

const RouteLinks = ({ path, exact, component }) => {
  const { user } = useSelector((state) => state.auth);
  return user ? (
    <Redirect to="/dashboard">
      <Dashboard />
    </Redirect>
  ) : (
    <Route path={path} exact={exact} component={component} />
  );
};

export default RouteLinks;
