import { selectLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const loggedIn = useSelector(selectLoggedIn);
  const navClass = ({ isActive }) =>
    clsx(styles.link, isActive && styles.isActive);
  return (
    <nav className={styles.login}>
      <NavLink to="/">Home</NavLink>
      {loggedIn && (
        <NavLink className={navClass} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
