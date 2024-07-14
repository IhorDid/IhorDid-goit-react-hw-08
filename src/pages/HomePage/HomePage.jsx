import { selectLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HomePage = () => {
  const LoggedIn = useSelector(selectLoggedIn);
  return (
    <>
      <h1>Phonebook application!</h1>
      <Link to="/login">{LoggedIn ? "Phonebook" : "Get started"}</Link>
    </>
  );
};

export default HomePage;
