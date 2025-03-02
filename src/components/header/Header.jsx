import { NavLink } from "react-router";
import { selectUser } from "../../redux/auth/selectors";
import { useDispatch, useSelector } from "react-redux";
import { isLoggedIn } from ""
import { logoutThunk } from "../../redux/auth/operations";
const Header = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
  return (
    <header>
        <h2>Auth</h2>
        {user.name && <h3>{user.email}</h3>}
        <nav className={s.nav}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/contacts">Contacts</NavLink>
            {!isLoggedIn && (
                <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/registration">Registration</NavLink>
            </>
        )}
        {isLoggedIn && <button onClick={() => dispatch(logoutThunk())}>Logout</button>}
        </nav>
    </header>
  )
}

export default Header;
