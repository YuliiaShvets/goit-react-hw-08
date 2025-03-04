import { NavLink } from "react-router";
import { selectUser } from "../../redux/auth/selectors";
import { useDispatch, useSelector } from "react-redux";
import { logoutThunk } from "../../redux/auth/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const Header = () => {
    const user = useSelector(selectUser);
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const dispatch = useDispatch();
  return (
    <header>
        {user.name && <h3>{user.email}</h3>}
        <nav>
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
