import { InputErrorMessage } from '../../general/components';
import { isInputInvalid } from '../../helpers';

export const ImageInput = ({ image, position, handleAddImage, error }) => {
  return (
    <div className="row">
      <div className="col-12">
        <label htmlFor={`image${position}`} className="form-label">
          Imagen {position + 1}
        </label>
        <input
          type="text"
          placeholder={`URL de la imagen ${position + 1}`}
          id={`image${position}`}
          name={`image${position}`}
          className={isInputInvalid(error, true)}
          value={image}
          onChange={(e) => handleAddImage(e, position)}
        />
        {error && (
          <InputErrorMessage message="La URL de la imagen es obligatoria" />
        )}
      </div>
    </div>
  );
};
