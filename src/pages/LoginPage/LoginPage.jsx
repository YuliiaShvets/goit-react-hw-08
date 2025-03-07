import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { loginThunk } from "../../redux/auth/operations";
import toast from "react-hot-toast";
import { Link } from "react-router";


const LoginPage = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (values, options) => {
    dispatch(loginThunk(values))
    .unwrap()
    .then(res => {
        toast.success(`Welcome, ${res.user.email}`);
        navigate("/contacts", { replace: true })
    })
    .catch (() => toast.erros("Invalid data"));
    options.resetForm();
  }
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <label>
            <span>Email:</span>
            <Field name="email"></Field>
          </label>
          <label>
            <span>Password:</span>
            <Field name="password" type="password"></Field>
          </label>
          <button type="submit">Login</button>
          <p>You do not have account yet? <Link to="/register">Get IT!</Link></p>
        </Form>
      </Formik>
    </div>
  )
}

export default LoginPage;