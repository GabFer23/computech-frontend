import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes';
import { Spinner } from '../general/components';
import { ComputerDetailsPage, MainPage, SearchPage } from '../general/pages';
import { ComputersRoutes } from '../computers/routes';
import { useAuthStore } from '../hooks';

export const AppRouter = () => {
  const { status, checkAuthToken } = useAuthStore();

  // !====================================================================================

  useEffect(() => {
    checkAuthToken();
  }, []);

  // !====================================================================================

  if (status === 'checking')
    return (
      <div className="d-flex" style={{ minHeight: '100vh' }}>
        <Spinner />
      </div>
    );

  // !====================================================================================

  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/computer/:id" element={<ComputerDetailsPage />} />
        {status === 'authenticated' ? (
          <>
            <Route path="/*" element={<ComputersRoutes />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        ) : (
          <>
            <Route path="/auth/*" element={<AuthRoutes />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
    </>
  );
};
