import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { computechApi } from '../api';
import {
  onAddComputer,
  onDeleteComputer,
  onLoadComputers,
  onLoading,
  onLoadUserComputers,
  onSetActiveComputer,
  onSetErrorMessage,
  onUpdateComputer,
} from '../store/computers/computersSlice';

export const useComputersStore = () => {
  // * ================== ACCEDER AL STORE DE LOS COMPUTADORES ==================
  const {
    isLoadingComputers,
    computers,
    myComputers,
    errorMessage,
    activeComputer,
  } = useSelector((state) => state.computers);

  const dispatch = useDispatch();

  // !====================================================================================
  // * ================== GUARDAR UN COMPUTADOR ==================

  const startSavingComputer = async ({ owner, ...computer }) => {
    try {
      if (computer._id) {
        // * ================== ACTUALIZAR COMPUTADOR ==================

        const url = `/computers/${computer._id}`;

        const { data } = await computechApi.put(url, computer);

        dispatch(onUpdateComputer(data.computer));

        return data;
      }

      // * ================== AGREGAR COMPUTADOR ==================
      const { data } = await computechApi.post('/computers', computer);

      dispatch(onAddComputer(data.computer));

      return data;
    } catch (error) {
      console.log(error);
      dispatch(onSetErrorMessage(error.response?.data.msg || error.message));
      Swal.fire('Error', error.response?.data.msg || error.message, 'error');
    }
  };

  // !====================================================================================
  // * ================== ELIMINAR UN COMPUTADOR ==================

  const startDeletingComputer = async (id) => {
    try {
      const url = `/computers/${id}`;
      const { data } = await computechApi.delete(url);

      dispatch(onDeleteComputer(id));

      return data;
    } catch (error) {
      console.log(error);
      dispatch(onSetErrorMessage(error.response?.data.msg || error.message));
      Swal.fire('Error', error.response?.data.msg || error.message, 'error');
    }
  };

  // !====================================================================================
  // * ================== OBTENERER LOS COMPUTADORES ==================

  const startLoadingComputers = async (params = {}) => {

    dispatch(onLoading());
    try {
      const { data } = await computechApi.get('/computers', { params });

      const { computers, totalPages } = data;

      dispatch(onLoadComputers({ computers, totalPages }));
    } catch (error) {
      console.log(error);
      dispatch(onSetErrorMessage(error.response?.data.msg || error.message));
      Swal.fire('Error', error.response?.data.msg || error.message, 'error');
    }
  };

  // !====================================================================================
  // * ================== OBTENERER LOS COMPUTADORES DE UN USUARIO ==================

  const startLoadingUserComputers = async () => {
    dispatch(onLoading());
    try {
      const { data } = await computechApi.get('computers/get/my');

      const { computers } = data;

      dispatch(onLoadUserComputers(computers));
    } catch (error) {
      console.log(error);
      dispatch(onSetErrorMessage(error.response?.data.msg || error.message));
      Swal.fire('Error', error.response?.data.msg || error.message, 'error');
    }
  };

  // !====================================================================================
  // * ================== OBTENERER UN COMPUTADOR POR ID ==================

  const startLoadingComputerById = async (id) => {
    dispatch(onLoading());

    try {
      const { data } = await computechApi.get(`computers/${id}`);

      const { computer } = data;

      dispatch(onSetActiveComputer(computer));
    } catch (error) {
      console.log(error);
      dispatch(onSetErrorMessage(error.response?.data.msg || error.message));
      Swal.fire('Error', error.response?.data.msg || error.message, 'error');
    }
  };

  // !====================================================================================

  return {
    // * Propiedades
    isLoadingComputers,
    computers,
    myComputers,
    activeComputer,
    errorMessage,

    // * Métodos
    startLoadingComputers,
    startLoadingUserComputers,
    startSavingComputer,
    startLoadingComputerById,
    startDeletingComputer,
  };
};
