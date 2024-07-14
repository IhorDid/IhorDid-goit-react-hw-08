import { ErrorMessage, Field, Form, Formik } from "formik";
import { register } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";
import * as yup from "yup";

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
        <Form>
          <label>
            Username
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="span" />
          </label>
          <label>
            Email
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="span" />
          </label>
          <label>
            Password
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="span" />
          </label>
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
