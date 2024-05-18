import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import { LuLogOut } from "react-icons/lu";

import css from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <button className={css.btn} type="button" onClick={handleLogout}>
        <LuLogOut className={css.sign} />
        <p className={css.text}>Logout</p>
      </button>
    </div>
  );
}
