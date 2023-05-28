import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Button, Link } from '@mui/material/';
import { NavLink } from 'react-router-dom';
import style from './usermenu.module.css';
export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={style.menue}>
      <Link className={style.link} underline="hover" as={NavLink} to="/login">
        <p>Welcome, {user.name}, here is your contacts book</p>
      </Link>

      <Button
        variant="contained"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Log Out
      </Button>
    </div>
  );
};
