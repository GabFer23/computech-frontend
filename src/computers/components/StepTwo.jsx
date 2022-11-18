import { InputErrorMessage } from '../../general/components';
import { isInputInvalid, selectValues } from '../../helpers';

const { storageTypes, OSs, categories } = selectValues();

// ? =================================================================================================================

export const StepTwo = ({
  formState,
  setFormState,
  brands,
  onInputChange,
  formSubmitted,
  storageTypeValid,
  storageValid,
  RAMValid,
  OSValid,
  categoryValid,
  brandValid,
}) => {
  return (
    <>
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <label htmlFor="storageType" className="form-label">
            Tipo de almacenamiento
          </label>
          <select
            id="storageType"
            name="storageType"
            className={isInputInvalid(storageTypeValid, formSubmitted)}
            value={formState.storageType}
            onChange={onInputChange}
          >
            <option value="" hidden>
              Selecciona
            </option>
            {storageTypes.map((type) => (
              <option value={type} key={type}>
                {type}
              </option>
            ))}
          </select>
          {formSubmitted && <InputErrorMessage message={storageTypeValid} />}
        </div>

        <div className="col-sm-12 col-md-6">
          <label htmlFor="storage" className="form-label">
            Almacenamiento (GB)
          </label>
          <input
            type="number"
            id="storage"
            name="storage"
            placeholder="Capacidad de Almacenamiento"
            value={formState.storage}
            onChange={(e) => onInputChange(e, 'number')}
            className={isInputInvalid(storageValid, formSubmitted)}
          />
          {formSubmitted && <InputErrorMessage message={storageValid} />}
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12 col-md-6">
          <label htmlFor="RAM" className="form-label">
            RAM (GB)
          </label>
          <input
            type="number"
            id="RAM"
            name="RAM"
            placeholder="Memoria RAM"
            value={formState.RAM}
            onChange={(e) => onInputChange(e, 'number')}
            className={isInputInvalid(RAMValid, formSubmitted)}
          />
          {formSubmitted && <InputErrorMessage message={RAMValid} />}
        </div>

        <div className="col-sm-12 col-md-6">
          <label htmlFor="OS" className="form-label">
            Sistema Operativo
          </label>

          <select
            id="OS"
            name="OS"
            className={isInputInvalid(OSValid, formSubmitted)}
            value={formState.OS}
            onChange={onInputChange}
          >
            <option value="" hidden>
              Selecciona
            </option>
            {OSs.map((os) => (
              <option value={os} key={os}>
                {os}
              </option>
            ))}
          </select>
          {formSubmitted && <InputErrorMessage message={OSValid} />}
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12 col-md-6">
          <label htmlFor="category" className="form-label">
            Categoría
          </label>
          <select
            id="category"
            name="category"
            className={isInputInvalid(categoryValid, formSubmitted)}
            value={formState.category}
            onChange={onInputChange}
          >
            <option value="" hidden>
              Selecciona
            </option>
            {categories.map((category) => (
              <option value={category} key={category}>
                {category}
              </option>
            ))}
          </select>
          {formSubmitted && <InputErrorMessage message={categoryValid} />}
        </div>

        <div className="col-sm-12 col-md-6 d-flex">
          <div className="form-check form-switch m-auto pt-2">
            <label className="form-check-label" htmlFor="backLightKeyboard">
              Teclado Retroiluminado
            </label>

            <input
              className="form-check-input shadow-none"
              type="checkbox"
              role="switch"
              name="backLightKeyboard"
              id="backLightKeyboard"
              checked={formState.backLightKeyboard}
              onChange={() =>
                setFormState({
                  ...formState,
                  backLightKeyboard: !formState.backLightKeyboard,
                })
              }
            />
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <label htmlFor="brand" className="form-label">
              Marca
            </label>
            <select
              id="brand"
              name="brand"
              className={isInputInvalid(brandValid, formSubmitted)}
              value={formState.brand}
              onChange={onInputChange}
            >
              <option value="" hidden>
                Selecciona
              </option>
              {brands.map((brand) => (
                <option value={brand._id} key={brand._id}>
                  {brand.name}
                </option>
              ))}
            </select>
            {formSubmitted && <InputErrorMessage message={brandValid} />}
          </div>
        </div>
      </div>
    </>
  );
};
