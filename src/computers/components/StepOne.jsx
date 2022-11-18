import { InputErrorMessage } from '../../general/components';
import { isInputInvalid } from '../../helpers';

export const StepOne = ({
  formState,
  onInputChange,
  formSubmitted,
  titleValid,
  descriptionValid,
  priceValid,
  screenValid,
}) => {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <label htmlFor="title" className="form-label">
            Título
          </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Título"
            className={isInputInvalid(titleValid, formSubmitted)}
            value={formState.title}
            onChange={onInputChange}
          />
          {formSubmitted && <InputErrorMessage message={titleValid} />}
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <label className="form-label" htmlFor="description">
            Descripción
          </label>
          <textarea
            name="description"
            id="description"
            placeholder="Descripción"
            rows="6"
            className={isInputInvalid(descriptionValid, formSubmitted)}
            value={formState.description}
            onChange={onInputChange}
          />
          {formSubmitted && <InputErrorMessage message={descriptionValid} />}
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 col-sm-12">
          <label className="form-label" htmlFor="price">
            Precio
          </label>

          <input
            type="number"
            id="price"
            name="price"
            placeholder="Precio"
            className={isInputInvalid(priceValid, formSubmitted)}
            value={formState.price}
            onChange={(e) => onInputChange(e, 'number')}
          />
          {formSubmitted && <InputErrorMessage message={priceValid} />}
        </div>

        <div className="col-md-6 col-sm-12">
          <label className="form-label" htmlFor="screen">
            Pantalla (") (0 si no aplica)
          </label>

          <input
            type="number"
            id="screen"
            name="screen"
            placeholder="Pantalla en pulgadas (0 si no aplica)"
            className={isInputInvalid(screenValid, formSubmitted)}
            value={formState.screen}
            onChange={(e) => onInputChange(e, 'number')}
          />
          {formSubmitted && <InputErrorMessage message={screenValid} />}
        </div>
      </div>
    </>
  );
};
