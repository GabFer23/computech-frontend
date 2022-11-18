export const ScreenRadios = ({ onNumericInputChange, numericFilters }) => {
  return (
    <div className="p-1">
      <h6>Pantalla</h6>
      <div className="form-check">
        <input
          className="form-check-input filter-input shadow-none"
          type="radio"
          name="screen"
          id="screen0"
          onChange={onNumericInputChange}
          value="screen="
          checked={numericFilters.screen === 'screen='}
        />
        <label className="form-check-label" htmlFor="screen0">
          Todas
        </label>
      </div>

      <div className="form-check">
        <input
          className="form-check-input filter-input shadow-none"
          type="radio"
          name="screen"
          id="screen1"
          value="screen>=14"
          onChange={onNumericInputChange}
        />
        <label className="form-check-label" htmlFor="screen1">
          {`>= 14"`}
        </label>
      </div>

      <div className="form-check">
        <input
          className="form-check-input filter-input shadow-none"
          type="radio"
          name="screen"
          id="screen3"
          value="screen>=15"
          onChange={onNumericInputChange}
        />
        <label className="form-check-label" htmlFor="screen3">
          {`>= 15"`}
        </label>
      </div>

      <div className="form-check">
        <input
          className="form-check-input filter-input shadow-none"
          type="radio"
          name="screen"
          id="screen3"
          value="screen>=17"
          onChange={onNumericInputChange}
        />
        <label className="form-check-label" htmlFor="screen3">
          {`>= 17"`}
        </label>
      </div>

      <div className="form-check">
        <input
          className="form-check-input filter-input shadow-none"
          type="radio"
          name="screen"
          id="screen4"
          value="screen=0"
          onChange={onNumericInputChange}
        />
        <label className="form-check-label" htmlFor="screen4">
          {`N/A`}
        </label>
      </div>

    </div>
  );
};
