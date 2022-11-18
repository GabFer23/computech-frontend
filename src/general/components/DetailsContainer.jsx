import { ComputerImages, ComputerData, Spinner } from '../components';

// ? =================================================================================================================

export const DetailsContainer = ({ computer, isLoading }) => {
  // * ===================== MOSTRAR SPINNER DURANTE CARGA =====================

  if (isLoading) {
    return (
      <div className="d-flex" style={{ height: '80vh' }}>
        <Spinner />
      </div>
    );
  }

  // ! ================================================================================================

  return (
    <div className="row">
      <ComputerImages {...computer} />
      <ComputerData {...computer} />
    </div>
  );
};
