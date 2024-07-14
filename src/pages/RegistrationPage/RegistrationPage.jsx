import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import { selectAuth } from "../../redux/auth/selectors";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const loading = useSelector(selectAuth);
  return (
    <div>
      <p>Register</p>
      <RegistrationForm />
      <Link to="/login">Log in</Link>
      {loading && <p>Loading...</p>}
      <Toaster position="top-right" />
    </div>
  );
};

export default RegisterPage;
