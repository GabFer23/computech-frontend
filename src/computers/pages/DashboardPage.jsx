import { useEffect } from 'react';
import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AlertMessage } from '../../general/components';
import { useComputersStore } from '../../hooks';
import { MainLayout } from '../../general/layout';
import { DashboardList } from '../components';

export const DashboardPage = () => {
  // * ====================== HOOK PARA STORE DE COMPUTADORES ======================

  const {
    isLoadingComputers,
    myComputers,
    startLoadingUserComputers,
    errorMessage,
  } = useComputersStore();

  // ! ================================================================================================

  useEffect(() => {
    startLoadingUserComputers();
  }, []);

  // ! ================================================================================================
  // * ===================== MOSTRAR MENSAJE EN CASO DE UN ERROR =====================

  if (errorMessage)
    return (
      <MainLayout>
        <AlertMessage message={errorMessage} type="danger" />
      </MainLayout>
    );

  // ! ================================================================================================

  return (
    <MainLayout>
      <Link
        to="/new"
        className="btn btn-success m-5 position-fixed rounded-5 end-0 bottom-0 shadow"
        style={{ zIndex: 10 }}
      >
        <FaPlus />
      </Link>
      <DashboardList myComputers={myComputers} isLoading={isLoadingComputers} />
    </MainLayout>
  );
};
