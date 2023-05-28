import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Form } from 'react-bootstrap';
import style from './login.module.css';
import { TextField, Button, Link } from '@mui/material/';
import { NavLink } from 'react-router-dom';
export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={style.logform}>
      <Link underline="none" className={style.btn} as={NavLink} to="index">
        x
      </Link>
      <Form onSubmit={handleSubmit} autoComplete="on">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <TextField
            sx={{ width: '60ch' }}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            type="email"
            name="email"
            required
            helperText="type in your email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <TextField
            sx={{ width: '60ch' }}
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
            name="password"
            required
            helperText="type in your password"
          />
        </Form.Group>
        <Button variant="contained" type="submit" sx={{ width: '67ch' }}>
          Sign in
        </Button>
      </Form>
      <Link
        className={style.link}
        underline="hover"
        as={NavLink}
        to="/register"
      >
        Create an account
      </Link>
    </div>
  );
};
