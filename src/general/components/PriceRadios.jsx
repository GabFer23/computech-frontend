export const PriceRadios = ({ onNumericInputChange, numericFilters }) => {
  return (
    <div className="p-1">
      <h6>Precio</h6>
      <div className="form-check">
        <input
          className="form-check-input filter-input shadow-none"
          type="radio"
          name="price"
          id="price0"
          onChange={onNumericInputChange}
          value="price="
          checked={numericFilters.price === 'price='}
        />
        <label className="form-check-label" htmlFor="price0">
          Todos
        </label>
      </div>

      <div className="form-check">
        <input
          className="form-check-input filter-input shadow-none"
          type="radio"
          name="price"
          id="price1"
          value="price<=1500000"
          onChange={onNumericInputChange}
          checked={numericFilters.price === 'price<=1500000'}
        />
        <label className="form-check-label" htmlFor="price1">
          {`<= 1'500.000`}
        </label>
      </div>

      <div className="form-check">
        <input
          className="form-check-input filter-input shadow-none"
          type="radio"
          name="price"
          id="price2"
          defaultValue="price<=3500000"
          onChange={onNumericInputChange}
        />
        <label className="form-check-label" htmlFor="price2">
          {`<= 3'500.000`}
        </label>
      </div>

      <div className="form-check">
        <input
          className="form-check-input filter-input shadow-none"
          type="radio"
          name="price"
          id="price3"
          defaultValue="price<=3500000"
          onChange={onNumericInputChange}
        />
        <label className="form-check-label" htmlFor="price3">
          {`<= 3'500.000`}
        </label>
      </div>

      <div className="form-check">
        <input
          className="form-check-input filter-input shadow-none"
          type="radio"
          name="price"
          id="price4"
          defaultValue="price>=5000000"
          onChange={onNumericInputChange}
        />
        <label className="form-check-label" htmlFor="price4">
          {`>= 5'000.000`}
        </label>
      </div>
    </div>
  );
};
