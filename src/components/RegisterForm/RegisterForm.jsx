import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { register } from "../../redux/auth/operations";
import { ErrorMessage, Field, Form, Formik } from "formik";
import s from "./RegisterForm.module.css";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required!"),
    email: Yup.string().email("Invalid email").required("Required!"),
    password: Yup.string()
      .min(8, "At least 8 characters")
      .required("Required!"),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values))
      .unwrap()
      .then((response) => {
        toast.success(`Welcome, ${response.user.name}`);
        resetForm();
      })
      .catch(() => {
        toast.error("Email is already in use");
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={s.regForm}>
        <label className={s.regLabel}>
          Name
          <Field type="text" name="name" className={s.regInput} />
          <ErrorMessage name="name" component="div" className={s.regError} />
        </label>

        <label className={s.regLabel}>
          Email
          <Field type="email" name="email" className={s.regInput} />
          <ErrorMessage name="email" component="div" className={s.regError} />
        </label>

        <label className={s.regLabel}>
          Password
          <Field type="password" name="password" className={s.regInput} />
          <ErrorMessage name="password" component="div" className={s.regError} />
        </label>

        <button type="submit" className={s.regButton}>
          Register
        </button>
        <p className={s.regMessage}>
            You already have account? <Link to='/login' className={s.regLink}>Get IT!</Link>
          </p>
      </Form>
    </Formik>
  );
};

export default RegisterForm;