import { useEffect } from 'react';
import { selectValues } from '../../helpers';
import { useForm } from '../../hooks';
import { PriceRadios, ScreenRadios, StorageRadios, RAMRadios } from './';

// ! ==================================================================================

const { storageTypes, OSs, categories } = selectValues();

// ! ==================================================================================

const formFields = {
  storageType: '',
  OS: '',
  category: '',
  brand: '',
  numericFilters: '',
};

const numericFields = {
  price: 'price=',
  screen: 'screen=',
  storage: 'storage=',
  RAM: 'RAM=',
};

// ? =================================================================================================================

export const FiltersForm = ({ brands, onAddFilters }) => {
  // * ====================== HOOK PARA MENEJO DEL FORMULARIO ======================

  const { onInputChange, formState, setFormState } = useForm(formFields);

  // ! ==================================================================================

  const { onInputChange: onNumericInputChange, formState: numericFilters } =
    useForm(numericFields);

  // ! ==================================================================================

  useEffect(() => {
    const arrayNumFilters = Object.values(numericFilters);
    const numericFiltersText = arrayNumFilters.join(',');
    setFormState({ ...formState, numericFilters: numericFiltersText });
  }, [numericFilters]);

  // ! ==================================================================================

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddFilters(formState);
  };

  // ! ==================================================================================

  return (
    <form className="row" onSubmit={handleSubmit}>
      <div className="accordion" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
             Precios - Tamaño de Pantalla
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <div className="d-flex justify-content-around">
                <PriceRadios
                  onNumericInputChange={onNumericInputChange}
                  numericFilters={numericFilters}
                />

                <ScreenRadios
                  onNumericInputChange={onNumericInputChange}
                  numericFilters={numericFilters}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Capacidad
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <div className="d-flex justify-content-around">
                <StorageRadios
                  onNumericInputChange={onNumericInputChange}
                  numericFilters={numericFilters}
                />

                <RAMRadios
                  onNumericInputChange={onNumericInputChange}
                  numericFilters={numericFilters}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Otros Detalles
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <div className="row">
                <div className="col-md-6 col-sm-12 d-grid gap-1 p-1">
                  <div className="d-block">
                    <label htmlFor="storageType" className="form-label m-0">
                      Tipo de almacenamiento
                    </label>
                    <select
                      className="form-select shadow-none text-capitalize"
                      id="storageType"
                      name="storageType"
                      value={formState.storageType}
                      onChange={onInputChange}
                    >
                      <option value="">Selecciona</option>
                      {storageTypes.map((type) => (
                        <option value={type} key={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="d-block">
                    <label htmlFor="OS" className="form-label m-0">
                      Sistema Operativo
                    </label>
                    <select
                      className="form-select shadow-none text-capitalize"
                      id="OS"
                      name="OS"
                      value={formState.OS}
                      onChange={onInputChange}
                    >
                      <option value="">Selecciona</option>
                      {OSs.map((os) => (
                        <option value={os} key={os}>
                          {os}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="col-md-6 col-sm-12 d-grid gap-1 p-1">
                  <div className="d-block">
                    <label htmlFor="category" className="form-label m-0">
                      Categoría
                    </label>
                    <select
                      className="form-select shadow-none text-capitalize"
                      id="category"
                      name="category"
                      value={formState.category}
                      onChange={onInputChange}
                    >
                      <option value="">Selecciona</option>
                      {categories.map((category) => (
                        <option value={category} key={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="d-block">
                    <label htmlFor="brand" className="form-label m-0">
                      Marca
                    </label>
                    <select
                      className="form-select shadow-none text-capitalize"
                      id="brand"
                      name="brand"
                      value={formState.brand}
                      onChange={onInputChange}
                    >
                      <option value="">Selecciona</option>
                      {brands.map((brand) => (
                        <option value={brand._id} key={brand._id}>
                          {brand.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12 py-2 d-flex justify-content-center">
        <button type="submit" className="btn btn-primary">
          Aplicar filtros
        </button>
      </div>
    </form>
  );
};
