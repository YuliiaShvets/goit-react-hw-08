import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/auth/operations";
import { Link } from "react-router";

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    name: "",
    password: "",
  };

  const handleSubmit = (values, options) => {
    dispatch(registerThunk(values));
    options.resetForm();
  }
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <label>
            <span>Name:</span>
            <Field name="name"></Field>
          </label>
          <label>
            <span>Email:</span>
            <Field name="email"></Field>
          </label>
          <label>
            <span>Password:</span>
            <Field name="password" type="password"></Field>
          </label>
          <button type="submit">Register</button>
          <p>You already have account? <Link to="/login">Get IT!</Link></p>
        </Form>
      </Formik>
    </div>
  )
}

export default RegistrationPage;
