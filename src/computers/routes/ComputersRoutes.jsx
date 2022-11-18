import { Navigate, Route, Routes } from 'react-router-dom';
import { DashboardPage, EditComputerPage, NewComputerPage } from '../pages';

export const ComputersRoutes = () => {
  return (
    <Routes>
      <Route path="dashboard" element={<DashboardPage />} />
      <Route path="new" element={<NewComputerPage />} />
      <Route path="edit/:id" element={<EditComputerPage />} />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
