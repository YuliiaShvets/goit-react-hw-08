import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import s from "./UserMenu.module.css";
import { logout } from "../../redux/auth/operations";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <>
    <div className={s.userWrapper}>
      <p className={s.userName}>Welcome, {user?.name}!</p>
      </div>
      <button className={s.userButton} type="button" onClick={() => dispatch(logout())}>
        Logout
      </button>

    </>
  );
};

export default UserMenu;
