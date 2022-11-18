import { ComputerCard, AlertMessage, Spinner } from './';

// ? =================================================================================================================

export const MainGrid = ({ computers, isLoading }) => {
  // * ===================== MOSTRAR SPINNER DURANTE CARGA =====================

  if (isLoading) {
    return (
      <div className="d-flex" style={{ height: '80vh' }}>
        <Spinner />
      </div>
    );
  }

  // ! ================================================================================================
  // * ===================== MOSTRAR MENSAJE EN CASO QUE NO HAYA DATOS =====================

  if (computers.length === 0)
    return (
      <div className="container">
        <AlertMessage message="No se encontraron resultados" type="info" />
      </div>
    );

  // ! ================================================================================================

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mb-2">
      {computers.map((computer) => (
        <ComputerCard {...computer} key={computer._id} />
      ))}
    </div>
  );
};
