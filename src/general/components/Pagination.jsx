export const Pagination = ({ currentPage, onPageChange, totalPages }) => {
  // ! ================================================================================================

  const totalButtons = new Array(totalPages).fill('');

  return (
    <nav aria-label="...">
      <ul className="pagination">
        <li className={`page-item`}>
          <button
            type="button"
            className="page-link"
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
          >
            {'<'}
          </button>
        </li>

        {totalButtons.map((btn, i) => (
          <li
            className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}
            key={i}
          >
            <button
              type="button"
              className="page-link"
              onClick={() => onPageChange(i + 1)}
            >
              {i + 1}
            </button>
          </li>
        ))}
        <li className={`page-item`}>
          <button
            type="button"
            className="page-link"
            disabled={currentPage === totalPages || totalPages === 0}
            onClick={() => onPageChange(currentPage + 1)}
          >
            {'>'}
          </button>
        </li>
      </ul>
    </nav>
  );
};
