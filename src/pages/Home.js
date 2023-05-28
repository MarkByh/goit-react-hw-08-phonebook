
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import style from './home.module.css'
export default function Home() {
  return (
    <>
      <div className={style.home}>

        <h1>Your Phone book is always here</h1>
        <p>Just sign in or create a new one</p>
        <div className={style.brn}>
          <Button className={style.btn2} variant="outlined" as={NavLink}
            to="/register">Sign up</Button>
          <p>Or</p>
          <Button className={style.btn2} variant="outlined" size="large" as={NavLink} to="/login" >Sign in</Button>
        </div>
      </div>
    </>
  );
}
