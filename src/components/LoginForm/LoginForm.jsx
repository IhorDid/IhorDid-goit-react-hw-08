import { Form, Formik, Field, ErrorMessage } from "formik";
import { login } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import styles from "./LoginForm.module.css";

const validationSchema = yup.object({
  email: yup
    .string("Enter  email")
    .email("Enter correct email")
    .required("Required"),
  password: yup
    .string("Enter password")
    .min(8, "Minimum 8 length")
    .required("Required"),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={styles.form}>
        <label className={styles.input}>
          Email
          <Field type="email" name="email" className={styles.field} />
          <ErrorMessage name="email" component="span" />
        </label>
        <label className={styles.input}>
          Password
          <Field type="password" name="password" className={styles.field} />
          <ErrorMessage name="password" component="span" />
        </label>
        <button type="submit">Log in</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
