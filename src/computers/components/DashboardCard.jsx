import { FaTrashAlt } from 'react-icons/fa';
import { MdLink, MdModeEdit } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useComputersStore } from '../../hooks';

export const DashboardCard = ({ _id, title, images, price }) => {
  // * ====================== HOOK PARA STORE DE COMPUTADORES ======================
  
  const { startDeletingComputer } = useComputersStore();
  
  // ! ================================================================================================
  // * ====================== ELIMINACIÓN DE COMPUTADOR ======================

  const handleDelete = async () => {
    const result = await Swal.fire({
      icon: 'question',
      title: `¿Eliminar ${title}?`,
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      allowOutsideClick: false,
    });

    if (!result.isConfirmed) return;

    const { msg } = await startDeletingComputer(_id);

    Swal.fire({
      icon: 'success',
      title: msg,
    });
  };

  // ! ================================================================================================

  return (
    <div className="card mb-3 text-decoration-none text-dark">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={images[0]} alt={title} className="w-100" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title text-capitalize">{title}</h5>
            <p className="card-text">$ {price.toLocaleString('es-CO')}</p>
            <div className="d-flex gap-1">
              <Link
                to={`/computer/${_id}`}
                className="btn btn-dark d-flex justify-content-center align-content-center fs-5 p-2"
              >
                <MdLink />
              </Link>
              <Link
                to={`/edit/${_id}`}
                className="btn btn-primary d-flex justify-content-center align-content-center fs-5 p-2"
              >
                <MdModeEdit />
              </Link>
              <button
                className="btn btn-danger d-flex justify-content-center align-content-center fs-5 p-2"
                onClick={handleDelete}
              >
                <FaTrashAlt />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
