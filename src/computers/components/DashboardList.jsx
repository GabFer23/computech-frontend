import { AlertMessage, Spinner } from '../../general/components';
import { DashboardCard } from './';

export const DashboardList = ({ myComputers, isLoading }) => {
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

  if (myComputers.length === 0)
    return (
      <AlertMessage message="No hay computadores registrados" type="info" />
    );

  // ! ================================================================================================

  return (
    <div className="container">
      {myComputers.map((computer) => (
        <DashboardCard key={computer._id} {...computer} />
      ))}
    </div>
  );
};
