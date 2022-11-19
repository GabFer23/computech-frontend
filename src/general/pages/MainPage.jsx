import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

import { AlertMessage, MainGrid, Pagination, Spinner } from '../components';
import { MainLayout } from '../../general/layout';
import { useComputersStore } from '../../hooks';

// ? =================================================================================================================

export const MainPage = () => {
  // * ============================= ACCEDER AL STORE DE COMPUTADORES =============================
  const { startLoadingComputers, isLoadingComputers, computers, errorMessage } =
    useComputersStore();

  // ! ================================================================================================

  const navigate = useNavigate();

  // ! ================================================================================================

  const { search } = useLocation();

  // ! ================================================================================================

  const { page = 1 } = queryString.parse(search);

  // ! ================================================================================================

  const [params, setParams] = useState({ page: Number(page) });

  // ! ================================================================================================

  const handlePageChange = (newPage) => setParams({ ...params, page: newPage });

  // ! ================================================================================================
  // * =================================== OBTENER COMPUTADORES ===================================

  useEffect(() => {
    if (params.page > 1) {
      navigate(`?page=${params.page}`);
    } else {
      navigate('/');
    }
    startLoadingComputers(params);
  }, [params]);

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
      <div className="container-fluid">
        <MainGrid
          computers={computers.content}
          isLoading={isLoadingComputers}
        />

        {!isLoadingComputers && (
          <Pagination
            totalPages={computers.totalPages}
            currentPage={params.page}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </MainLayout>
  );
};
