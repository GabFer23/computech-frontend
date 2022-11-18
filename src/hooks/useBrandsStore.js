import { useDispatch, useSelector } from 'react-redux';
import { computechApi } from '../api';
import { onLoadBrands } from '../store/brands/brandsSlice';

export const useBrandsStore = () => {
  // * ================== ACCEDER AL STORE DE LAS MARCAS ==================
  const { isLoadingBrands, brands, errorMessage } = useSelector(
    (state) => state.brands
  );

  const dispatch = useDispatch();

  // !====================================================================================
  // * ================== OBTENERER LAS MARCAS ==================

  const startLoadingBrands = async () => {
    try {
      const { data } = await computechApi.get('/brands');

      const { brands } = data;

      dispatch(onLoadBrands(brands));
    } catch (error) {
      console.log('Error cargando marcas');
      console.error(error);
    }
  };

  // !====================================================================================
  return {
    // * Propiedades
    isLoadingBrands,
    brands,
    errorMessage,

    // * Métodos
    startLoadingBrands,
  };
};
