import { selectUser } from "../../redux/auth/selectors";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const handleClick = () => {
    dispatch(logout());
  };
  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button onClick={handleClick}>Log out</button>
    </div>
  );
};

export default UserMenu;
