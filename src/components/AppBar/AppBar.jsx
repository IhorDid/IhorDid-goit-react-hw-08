import { selectLoggedIn } from "../../redux/auth/selectors";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import { useSelector } from "react-redux";
import AuthNav from "../AuthNav/AuthNav";

const AppBar = () => {
  const loggedIn = useSelector(selectLoggedIn);
  return (
    <div>
      <Navigation />
      {loggedIn ? <UserMenu /> : <AuthNav />}
    </div>
  );
};

export default AppBar;
