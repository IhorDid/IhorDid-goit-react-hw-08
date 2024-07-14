import { Link } from "react-router-dom";

const AuthNav = () => {
  return (
    <ul>
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
