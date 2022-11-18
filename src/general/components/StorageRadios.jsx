export const StorageRadios = ({ onNumericInputChange, numericFilters }) => {
  return (
    <div className="p-1">
      <h6>Almacenamiento</h6>
      <div className="form-check">
        <input
          className="form-check-input filter-input shadow-none"
          type="radio"
          name="storage"
          id="storage0"
          onChange={onNumericInputChange}
          value="storage="
          checked={numericFilters.storage === 'storage='}
        />
        <label className="form-check-label" htmlFor="storage0">
          Todos
        </label>
      </div>

      <div className="form-check">
        <input
          className="form-check-input filter-input shadow-none"
          type="radio"
          name="storage"
          id="storage1"
          value="storage<=64"
          onChange={onNumericInputChange}
        />
        <label className="form-check-label" htmlFor="storage1">
          {`<= 64 GB`}
        </label>
      </div>

      <div className="form-check">
        <input
          className="form-check-input filter-input shadow-none"
          type="radio"
          name="storage"
          id="storage2"
          defaultValue="storage<=256"
          onChange={onNumericInputChange}
        />
        <label className="form-check-label" htmlFor="storage2">
          {`<= 256 GB`}
        </label>
      </div>

      <div className="form-check">
        <input
          className="form-check-input filter-input shadow-none"
          type="radio"
          name="storage"
          id="storage3"
          defaultValue="storage<=479"
          onChange={onNumericInputChange}
        />
        <label className="form-check-label" htmlFor="storage3">
          {`<= 479 GB`}
        </label>
      </div>

      <div className="form-check">
        <input
          className="form-check-input filter-input shadow-none"
          type="radio"
          name="storage"
          id="storage4"
          defaultValue="storage<=512"
          onChange={onNumericInputChange}
        />
        <label className="form-check-label" htmlFor="storage4">
          {`<= 512 GB`}
        </label>
      </div>

      <div className="form-check">
        <input
          className="form-check-input filter-input shadow-none"
          type="radio"
          name="storage"
          id="storage4"
          defaultValue="storage>512"
          onChange={onNumericInputChange}
        />
        <label className="form-check-label" htmlFor="storage4">
          {`> 512 GB`}
        </label>
      </div>
    </div>
  );
};
