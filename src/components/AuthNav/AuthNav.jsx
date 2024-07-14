import { Link } from "react-router-dom";
import styles from "./AuthNav.module.css";
const AuthNav = () => {
  return (
    <ul className={styles.list}>
      <li>
        <Link to="/login">Log in</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
    </ul>
  );
};

export default AuthNav;
