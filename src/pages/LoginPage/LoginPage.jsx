import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { loginThunk } from "../../redux/auth/operations";
import toast from "react-hot-toast";


const LoginPage = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(loginThunk(values))
    .unwrap()
    .then(res => {
        toast.success(`Welcome, ${res.user.email}`);
        navigate("/contactPage", { replace: true })
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
        </Form>
      </Formik>
    </div>
  )
}

export default LoginPage;