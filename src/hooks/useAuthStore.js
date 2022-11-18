import { useDispatch, useSelector } from 'react-redux';
import { computechApi } from '../api';
import { onChecking, onLogin, onLogout } from '../store/auth/authSlice';
import { onLogoutComputers } from '../store/computers/computersSlice';

export const useAuthStore = () => {
  // * ================== ACCEDER AL STORE DEL AUTH ==================

  const { status, user, errorMessage } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  // !================================================================================================
  // * ================== LOGIN ==================

  const startLogin = async ({ email, password }) => {
    // ? PONER APLICACIÓN EN ESTADO DE CARGA
    dispatch(onChecking());

    try {
      // ? HACER PETICIÓN AL BACKEND
      const { data } = await computechApi.post('/auth/login', {
        email,
        password,
      });

      const { user } = data;

      // ? GUARDAR TOKEN EN LOCAL STORAGE
      localStorage.setItem('token', user.token);

      // ? LOGIN AL USUARIO EN EL STATE
      dispatch(onLogin({ name: user.name, _id: user._id }));
    } catch (error) {
      // ? AGREGAR ERROR AL STATE
      dispatch(onLogout(error.response.data?.msg));
      setTimeout(() => {
        dispatch(onLogout(null));
      }, 3000);
    }
  };

  // !================================================================================================
  // * ================== REGISTRO ==================

  const startRegister = async ({ name, email, phone, password }) => {
    // ? PONER APLICACIÓN EN ESTADO DE CARGA
    dispatch(onChecking());

    try {
      // ? HACER PETICIÓN AL BACKEND
      const { data } = await computechApi.post('/auth/signup', {
        name,
        email,
        phone,
        password,
      });

      dispatch(onLogout(null));
    } catch (error) {
      dispatch(onLogout(error.response.data?.msg));
      setTimeout(() => {
        dispatch(onLogout(null));
      }, 3000);
    }
  };

  // !================================================================================================
  // * ================== VALIDAR SESIÓN ==================

  const checkAuthToken = async () => {
    // ? OBTENER TOKEN DEL LOCAL STORAGE
    const token = localStorage.getItem('token');

    // ? VALIDAR QUE EXISTE EL TOKEN
    if (!token) return dispatch(onLogout(null));

    try {
      // ? HACER PETICIÓN AL BACKEND
      const { data } = await computechApi.get('auth/refresh');

      const { user } = data;

      localStorage.setItem('token', user.token);
      dispatch(onLogin({ name: user.name, _id: user._id }));
    } catch (error) {
      localStorage.clear();
      dispatch(onLogout(null));
    }
  };

  // !================================================================================================
  // * ================== LOGOUT ==================

  const startLogout = () => {
    // ? BORRAR TOKEN DEL LOCAL STORAGE
    localStorage.clear();

    dispatch(onChecking());

    setTimeout(() => {
      dispatch(onLogout(null));
      dispatch(onLogoutComputers());
    }, 100);
  };

  // !================================================================================================

  return {
    // * Propiedades
    status,
    user,
    errorMessage,

    // * Métodos
    startLogin,
    startRegister,
    checkAuthToken,
    startLogout,
  };
};
