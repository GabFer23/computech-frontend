import { useEffect } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { AlertMessage, Spinner } from '../../general/components';
import { useAuthStore, useComputersStore } from '../../hooks';
import { MainLayout } from '../../general/layout';
import { ComputerForm } from '../components';

export const EditComputerPage = () => {
  // * ====================== OBTENER ID DEL COMPUTADOR ======================
  const { id } = useParams();

  // ! ==================================================================================
  // * ====================== HOOK PARA STORE DE AUTH ======================

  const { user } = useAuthStore();

  // ! ==================================================================================
  // * ====================== HOOK PARA STORE DE COMPUTADORES ======================

  const {
    startSavingComputer,
    startLoadingComputerById,
    isLoadingComputers,
    activeComputer,
    errorMessage,
  } = useComputersStore();

  // ! ==================================================================================
  // * ====================== OBTENER LOS DATOS DEL COMPUTADOR ======================

  useEffect(() => {
    startLoadingComputerById(id);
  }, []);

  // ! ==================================================================================
  // * ===================== MOSTRAR SPINNER DURANTE CARGA =====================

  if (isLoadingComputers) {
    return (
      <MainLayout>
        <Spinner />
      </MainLayout>
    );
  }

  // ! ==================================================================================
  // * ===================== MOSTRAR MENSAJE EN CASO DE UN ERROR =====================

  if (errorMessage)
    return (
      <MainLayout>
        <AlertMessage message={errorMessage} type="danger" />
      </MainLayout>
    );

  // ! ==================================================================================

  return (
    <MainLayout>
      <>
        {activeComputer && activeComputer.owner._id !== user._id && (
          <Navigate to="/dashboard" />
        )}

        <div className="row w-100 justify-content-center align-content-center">
          <div className="p-5 shadow rounded col-sm-12 col-md-10 col-lg-8 ">
            <ComputerForm
              activeComputer={activeComputer}
              startSavingComputer={startSavingComputer}
            />
          </div>
        </div>
      </>
    </MainLayout>
  );
};
