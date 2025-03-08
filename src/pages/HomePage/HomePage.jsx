import s from "./HomePage.module.css";

const Home  = () => {
  return (
    <div className={s.container}>
       <div className={s.txt}>
      <h1 className={s.title}>Welcome to <span className={s.span}>PhoneBook</span> - You Personal Contact Manager!</h1>
      <p className={s.text}>Looking for a convenient way to store and manage your contacts? 
        PhoneBook is the perfect solution for you!</p>
        <p className={s.text}><span className={s.span}>Get started now!</span> Sing up or log in to make contact management simple and convenient.</p>
    </div>
    </div>
  );
}

export default Home;