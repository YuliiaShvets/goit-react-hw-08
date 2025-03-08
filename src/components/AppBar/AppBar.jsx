import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { AuthNav } from "../AuthNav/AuthNav.jsx";
import UserMenu from "../UserMenu/UserMenu";
import Navigation from "../Navigation/Navigation";
import s from "../AppBar/AppBar.module.css"

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header className={s.AppBar}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;