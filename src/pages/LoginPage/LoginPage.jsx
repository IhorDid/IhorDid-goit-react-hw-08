import LoginForm from "../../components/LoginForm/LoginForm";
import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div>
      <p>Please, login!</p>
      <LoginForm />
      <Link to="/register">Registration</Link>
      <Toaster position="top-right" />
    </div>
  );
};

export default LoginPage;
