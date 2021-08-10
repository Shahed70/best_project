import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "../components/Auth/Login";


const PrivateRoute = ({path, exact, component }) => {
  const { user } = useSelector((state) => state.auth);
  return user ? (
    <Route
      path={path}
      exact={exact}
      component={component}
    />

  ) : (
    <Redirect to="/login">
      <Login />
    </Redirect>
  );
};

export default PrivateRoute;
