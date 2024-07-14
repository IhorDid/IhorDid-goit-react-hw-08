import { ErrorMessage, Field, Form, Formik } from "formik";
import { register } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import styles from "./RegistrationForm.module.css";

const validationSchema = yup.object({
  name: yup.string("Enter your name").required("Required"),
  email: yup
    .string("Enter  email")
    .email("Enter correct email")
    .required("Required"),
  password: yup
    .string("Enter password")
    .min(8, "Minimum 8  length")
    .required("Required"),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={styles.form}>
          <label className={styles.input}>
            Username
            <Field type="text" name="name" className={styles.field} />
            <ErrorMessage name="name" component="span" />
          </label>
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
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
