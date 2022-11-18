export const RAMRadios = ({ onNumericInputChange, numericFilters }) => {
  return (
    <div className="p-1">
      <h6>RAM</h6>
      <div className="form-check">
        <input
          className="form-check-input filter-input shadow-none"
          type="radio"
          name="RAM"
          id="RAM0"
          onChange={onNumericInputChange}
          value="RAM="
          checked={numericFilters.RAM === 'RAM='}
        />
        <label className="form-check-label" htmlFor="RAM0">
          Todas
        </label>
      </div>

      <div className="form-check">
        <input
          className="form-check-input filter-input shadow-none"
          type="radio"
          name="RAM"
          id="RAM1"
          value="RAM<8"
          onChange={onNumericInputChange}
        />
        <label className="form-check-label" htmlFor="RAM1">
          {`< 8 GB`}
        </label>
      </div>

      <div className="form-check">
        <input
          className="form-check-input filter-input shadow-none"
          type="radio"
          name="RAM"
          id="RAM2"
          defaultValue="RAM<=10"
          onChange={onNumericInputChange}
        />
        <label className="form-check-label" htmlFor="RAM2">
          {`<= 10 GB`}
        </label>
      </div>

      <div className="form-check">
        <input
          className="form-check-input filter-input shadow-none"
          type="radio"
          name="RAM"
          id="RAM3"
          defaultValue="RAM<=12"
          onChange={onNumericInputChange}
        />
        <label className="form-check-label" htmlFor="RAM3">
          {`<= 12 GB`}
        </label>
      </div>

      <div className="form-check">
        <input
          className="form-check-input filter-input shadow-none"
          type="radio"
          name="RAM"
          id="RAM4"
          defaultValue="RAM<=16"
          onChange={onNumericInputChange}
        />
        <label className="form-check-label" htmlFor="RAM4">
          {`<= 16 GB`}
        </label>
      </div>

      <div className="form-check">
        <input
          className="form-check-input filter-input shadow-none"
          type="radio"
          name="RAM"
          id="RAM4"
          defaultValue="RAM>16"
          onChange={onNumericInputChange}
        />
        <label className="form-check-label" htmlFor="RAM4">
          {`> 16 GB`}
        </label>
      </div>
    </div>
  );
};
