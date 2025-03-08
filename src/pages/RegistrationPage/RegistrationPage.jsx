import s from "./RegistrationPage.module.css";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const RegisterPage = () => {
  return (
    <div className={s.regContainer}>
      <div className={s.regWrapper}>
      <h2 className={s.regTitle}>Register</h2>
      <RegisterForm />
    </div>
    </div>
  );
};

export default RegisterPage;