import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AlertMessage, Spinner } from '../../general/components';
import { computerFormValidations } from '../../helpers';
import { useBrandsStore, useComputersStore, useForm } from '../../hooks';
import { StepOne, StepTwo, StepThree, FormProgressBar, FormFooter } from './';

// ? =================================================================================================================

export const ComputerForm = ({ formFields }) => {
  // * ====================== HOOK PARA STORE DE COMPUTADORES ======================
  
  const { startSavingComputer } = useComputersStore();
  
    // ! ==================================================================================
    // * ====================== HOOK PARA STORE DE MARCAS ======================
  
    const { startLoadingBrands, isLoadingBrands, brands } = useBrandsStore();

  // ! ==================================================================================
  // * ====================== ESTADO PARA PASOS DEL FORMULARIO ======================

  const [page, setPage] = useState(0);

  // ! ==================================================================================
  // * ====================== ESTADO PARA ENVÍO DEL FORMULARIO ======================

  const [formSubmitted, setFormSubmitted] = useState(false);

  // ! ==================================================================================
  // * ============= OBTENER LAS MARCAS PARA USARLAS EN EL FORMULARIO =============

  useEffect(() => {
    startLoadingBrands();
  }, []);

  // ! ==================================================================================

  const navigate = useNavigate();

  // ! ==================================================================================
  // * ====================== HOOK PARA MENEJO DEL FORMULARIO ======================

  const {
    onInputChange,
    formState,
    setFormState,
    isFormValid,
    // * Step One
    titleValid,
    descriptionValid,
    priceValid,
    screenValid,
    // * Step Two
    storageTypeValid,
    storageValid,
    RAMValid,
    OSValid,
    categoryValid,
    brandValid,
  } = useForm(formFields, computerFormValidations);

  // ! ==================================================================================

  const FormTitles = ['Datos Generales', 'Más Detalles', 'Imágenes'];

  // ! ==================================================================================
  // * ====================== VALIDACIONES DEL PASO 1 ======================

  const stepOneValidations = {
    titleValid,
    descriptionValid,
    priceValid,
    screenValid,
  };

  // ! ==================================================================================
  // * ====================== VALIDACIONES DEL PASO 2 ======================

  const stepTwoValidations = {
    storageTypeValid,
    storageValid,
    RAMValid,
    OSValid,
    categoryValid,
    brandValid,
  };

  // ! ==================================================================================
  // * =============== MOSTRAR PASO DEL FORMULARIO SEGÚN EL ESTADO ===============

  const pageDisplay = () => {
    switch (page) {
      case 0:
        return (
          <StepOne
            formState={formState}
            onInputChange={onInputChange}
            formSubmitted={formSubmitted}
            {...stepOneValidations}
          />
        );
      case 1:
        return (
          <StepTwo
            formState={formState}
            brands={brands}
            setFormState={setFormState}
            onInputChange={onInputChange}
            formSubmitted={formSubmitted}
            {...stepTwoValidations}
          />
        );
      case 2:
        return (
          <StepThree
            formState={formState}
            setFormState={setFormState}
            formSubmitted={formSubmitted}
          />
        );
    }
  };

  // ! ==================================================================================
  // * =============== MANEJAR ENVÍO DEL FORMULARIO ===============

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormSubmitted(true);

    if (!isFormValid) return;

    const { msg } = await startSavingComputer(formState);

    Swal.fire({
      icon: 'success',
      title: msg,
    });

    navigate('/dashboard');
  };

  // ! ==================================================================================
  // * ===================== MOSTRAR SPINNER DURANTE CARGA =====================

  if (isLoadingBrands) {
    return (
      <div className="d-flex" style={{ height: '80vh' }}>
        <Spinner />
      </div>
    );
  }

  // ! ==================================================================================

  return (
    <form onSubmit={handleSubmit}>
      <FormProgressBar page={page} numPages={FormTitles.length} />

      <div className="pt-3">
        {!isFormValid && formSubmitted && (
          <AlertMessage
            message="El formulario no ha sido completado correctamente"
            type="danger"
          />
        )}

        <h1 className="text-center mt-5">{FormTitles[page]}</h1>

        <div className="d-grid gap-1 p-2">{pageDisplay()}</div>

        <FormFooter
          page={page}
          setPage={setPage}
          numPages={FormTitles.length}
        />

        {page == FormTitles.length - 1 && (
          <button className="btn btn-outline-success w-100 mt-4" type="submit">
            Guardar
          </button>
        )}
      </div>
    </form>
  );
};
