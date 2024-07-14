import { selectLoggedIn } from "../../redux/auth/selectors";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import { useSelector } from "react-redux";
import AuthNav from "../AuthNav/AuthNav";
import styles from "./AppBar.module.css";

const AppBar = () => {
  const loggedIn = useSelector(selectLoggedIn);
  return (
    <div className={styles.nav}>
      <Navigation />
      {loggedIn ? <UserMenu /> : <AuthNav />}
    </div>
  );
};

export default AppBar;
