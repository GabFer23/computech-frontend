import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

import {
  AlertMessage,
  FiltersForm,
  MainGrid,
  Pagination,
  Spinner,
} from '../components';
import { useBrandsStore, useComputersStore } from '../../hooks';
import { MainLayout } from '../layout';
import { useEffect, useState } from 'react';

export const SearchPage = () => {
  // * ============================= ACCEDER AL STORE DE COMPUTADORES =============================
  const { startLoadingComputers, isLoadingComputers, computers, errorMessage } =
    useComputersStore();

  // ! ================================================================================================
  // * ====================== HOOK PARA STORE DE MARCAS ======================

  const { startLoadingBrands, brands, isLoadingBrands } = useBrandsStore();

  // ! ================================================================================================

  const navigate = useNavigate();

  // ! ================================================================================================

  const { search } = useLocation();

  // ! ================================================================================================

  const { page = 1, q = '' } = queryString.parse(search);

  // ! ================================================================================================

  const [params, setParams] = useState({ page: Number(page), q });

  // ! ================================================================================================

  useEffect(() => {
    startLoadingBrands();
  }, []);

  // ! ================================================================================================
  // * ================= CAMBIAR PARÁMETROS AL MOMENTO QUE CAMBIE LA BÚSQUEDA =================

  useEffect(() => {
    setParams({ ...params, q, page: validPage(Number(page)) });
  }, [q]);

  // ! ================================================================================================
  // * =================================== OBTENER COMPUTADORES ===================================

  useEffect(() => {
    if (params.page > 1) {
      navigate(`?q=${params.q}&page=${params.page}`);
    } else {
      navigate(`/search?q=${params.q}`);
    }

    startLoadingComputers(params);
  }, [params]);

  // ! ================================================================================================

  const validPage = (page) => {
    if (page <= computers.totalPages) return page;

    return page;
  };

  // ! ================================================================================================

  const handlePageChange = (newPage) => setParams({ ...params, page: newPage });

  // ! ================================================================================================

  const handleAddFilters = (filterParams) => {
    setParams({ ...params, ...filterParams, page: 1 });
  };

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
      <div className="p-2 w-100">
        <FiltersForm brands={brands} onAddFilters={handleAddFilters} />

        <MainGrid
          computers={computers.content}
          isLoading={isLoadingComputers || isLoadingBrands}
        />

        <Pagination
          totalPages={computers.totalPages}
          currentPage={params.page}
          onPageChange={handlePageChange}
        />
      </div>
    </MainLayout>
  );
};
