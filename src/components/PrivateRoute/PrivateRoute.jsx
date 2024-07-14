import { selectLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, redirectTo = "/login" }) => {
  const loggedIn = useSelector(selectLoggedIn);
  return loggedIn ? Component : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
