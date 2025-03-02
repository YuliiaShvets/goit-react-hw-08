import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/auth/operations";

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    name: "",
    password: "",
  };

  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(registerThunk(values));
    options.reseyForm();
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
        </Form>
      </Formik>
    </div>
  )
}

export default RegistrationPage;
