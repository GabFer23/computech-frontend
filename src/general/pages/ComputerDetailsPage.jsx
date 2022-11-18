import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AlertMessage, DetailsContainer } from '../components';
import { useComputersStore } from '../../hooks';
import { MainLayout } from '../../general/layout';

// ? =================================================================================================================

export const ComputerDetailsPage = () => {
  const {
    startLoadingComputerById,
    activeComputer,
    isLoadingComputers,
    errorMessage,
  } = useComputersStore();

  // ! ================================================================================================

  const { id } = useParams();

  // ! ================================================================================================

  useEffect(() => {
    startLoadingComputerById(id);
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
      <DetailsContainer
        computer={activeComputer}
        isLoading={isLoadingComputers}
      />
    </MainLayout>
  );
};
