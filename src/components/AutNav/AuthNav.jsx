import { NavLink } from "react-router-dom";
import { GiArchiveRegister } from "react-icons/gi";
import { FaSpaceShuttle } from "react-icons/fa";

export const AuthNav = () => {
  return (
    <div>
      <NavLink to="/register">
        <div>
          <GiArchiveRegister />
          Register
        </div>
      </NavLink>
      <NavLink to="/login">
        <div>
          <FaSpaceShuttle />
          Log In
        </div>
      </NavLink>
    </div>
  );
};