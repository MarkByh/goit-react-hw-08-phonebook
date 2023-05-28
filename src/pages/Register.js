import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { selectErrorUser, selectIsLoadingUser } from 'redux/auth/selectors';

export default function Register() {
  const isLoading = useSelector(selectIsLoadingUser);
  const error = useSelector(selectErrorUser);

  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
      {isLoading && !error && <b>Loading...</b>}
    </div>
  );
}
