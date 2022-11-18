import { useComputersStore } from '../../hooks';
import { MainLayout } from '../../general/layout';
import { ComputerForm } from '../components';

export const NewComputerPage = () => {
  // ! ==================================================================================
  // * ====================== HOOK PARA STORE DE COMPUTADORES ======================

  const { startSavingComputer, errorMessage } = useComputersStore();

  // ! ==================================================================================
  // * ===================== MOSTRAR MENSAJE EN CASO DE UN ERROR =====================

  if (errorMessage)
    return (
      <div className="container">
        <AlertMessage message={errorMessage} type="danger" />
      </div>
    );

  // ! ==================================================================================

  return (
    <MainLayout>
      <div className="row w-100 justify-content-center align-content-center">
        <div className="p-5 shadow rounded col-sm-12 col-md-10 col-lg-8 ">
          <ComputerForm startSavingComputer={startSavingComputer} />
        </div>
      </div>
    </MainLayout>
  );
};
