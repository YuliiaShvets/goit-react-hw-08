import s from "./LoginPage.module.css";
import LoginForm from "..//..//components/LoginForm/LoginForm";

const LoginPage = () => {
  return (
    <div className={s.logContainer}>
    <div className={s.logWrapper}>
      <h2 className={s.logTitle}>Log In</h2>
      <LoginForm />
    </div>
    </div>
  );
};

export default LoginPage;