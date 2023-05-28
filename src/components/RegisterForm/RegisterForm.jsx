import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Form } from 'react-bootstrap';
import style from './register.module.css';
import { Formik, Form as FormikForm, Field } from 'formik';
import { NavLink } from 'react-router-dom';
import { Button, Link } from '@mui/material/';
import * as Yup from 'yup';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const Schema = Yup.object().shape({
  name: Yup.string().min(6, 'Too Short!').max(20, 'Too Long!').required(),
  password: Yup.string().min(7, 'Too Short!').required(),
  email: Yup.string().email().required(),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (formData, actions) => {
    // e.preventDefault();
    // const form = e.currentTarget;
    dispatch(register({ ...formData }));
    actions.resetForm();
  };

  return (
    <div className={style.logform}>
      <Link underline="none" className={style.btn} as={NavLink} to="index">
        x
      </Link>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={Schema}
      >
        {({ errors, touched }) => (
          <Form as={FormikForm}>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                as={Field}
                type="text"
                placeholder="Username"
                name="name"
              />
              {errors.name && touched.name ? (
                <div className={style.error}>{errors.name}</div>
              ) : null}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                as={Field}
                type="email"
                placeholder="myemail@gmail.com"
                name="email"
              />
              {errors.email && touched.email ? (
                <div className={style.error}>{errors.email}</div>
              ) : null}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                as={Field}
                type="password"
                placeholder="Password (min 7 characters)"
                name="password"
              />
              {errors.password && touched.password ? (
                <div className={style.error}>{errors.password}</div>
              ) : null}
            </Form.Group>
            <Button variant="contained" type="submit" sx={{ width: '67ch' }}>
              Register
            </Button>
          </Form>
        )}
      </Formik>
      <Link className={style.link} underline="hover" as={NavLink} to="/login">
        Sign in
      </Link>
    </div>
  );
};
