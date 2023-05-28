import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';
import { Navigation } from './Navigation/Navigation';

export const Layout = () => {
  return (
    <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 16px' }}>
      <Navigation />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
