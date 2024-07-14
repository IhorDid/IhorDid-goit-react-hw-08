import { selectLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

const Navigation = () => {
  const loggedIn = useSelector(selectLoggedIn);
  const navClass = ({ isActive }) => clsx(css.link, isActive && css.isActive);
  return (
    <nav>
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
