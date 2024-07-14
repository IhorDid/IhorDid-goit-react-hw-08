import { selectLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const RestrictedRoute = ({ component: Component, redirectTo = "/" }) => {
  const loggedIn = useSelector(selectLoggedIn);
  return loggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;
