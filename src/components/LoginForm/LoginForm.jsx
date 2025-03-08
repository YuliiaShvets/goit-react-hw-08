import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { login } from "../../redux/auth/operations";
import toast from "react-hot-toast";
import { ErrorMessage, Field, Form, Formik } from "formik";
import s from "./LoginForm.module.css";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6, "At least 6 characters").required("Required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values))
      .unwrap()
      .then((response) => {
        toast.success(`Welcome, ${response.user.name}`);
        navigate("/contacts", { replace: true });
      })
      .catch(() => toast.error("Wrong email or password"));

    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={s.logForm}>
        <label className={s.logLabel}>
          Email
          <Field type="email" name="email" className={s.logInput} />
          <ErrorMessage name="email" component="div" className={s.logError} />
        </label>

        <label className={s.logLabel}>
          Password
          <Field type="password" name="password" className={s.logInput} />
          <ErrorMessage name="password" component="div" className={s.logError} />
        </label>

        <button type="submit" className={s.logButton}>
          Log In
        </button>
        <p className={s.logMessage}>
            You already have account? <Link to='/login' className={s.logLink}>Get IT!</Link>
          </p>
      </Form>
    </Formik>
  );
};

export default LoginForm;