// import { NavLink } from 'react-router-dom';
import { UserMenu } from '../UserMenu/UserMenu';
// import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
// import { Nav } from 'react-bootstrap';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className="mb-3">
      <div>
        <div
          variant="tabs"
          defaultActiveKey="/login"
          className="d-flex justify-content-center gap-5"
        >
          {isLoggedIn ? <UserMenu /> : ''}
        </div>
      </div>
    </header>
  );
};
