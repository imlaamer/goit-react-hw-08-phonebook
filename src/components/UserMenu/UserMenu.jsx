import { useDispatch, useSelector } from 'react-redux';
import {
  selectAuthIsLoading,
  selectAuthUserData,
  logoutUser,
} from '../../redux';
import css from './UserMenu.module.css';

export function UserMenu() {
  const dispatch = useDispatch();
  const userData = useSelector(selectAuthUserData);
  const isLoading = useSelector(selectAuthIsLoading);
  const handleLogOut = () => dispatch(logoutUser());
  const userEmail = userData?.email ?? "Could't get user email"; //
  return (
    <div className={css.userMenuBox}>
      <p>{userEmail}</p>
      <button
        onClick={handleLogOut}
        disabled={isLoading}
        type="button"
        className={css.userMenuBtn}
      >
        Logout
      </button>
    </div>
  );
}
