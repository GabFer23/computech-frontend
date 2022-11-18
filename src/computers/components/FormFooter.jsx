import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

export const FormFooter = ({ setPage, page, numPages }) => {
  return (
    <footer className="d-flex justify-content-center gap-1">
      <button
        type="button"
        className="btn btn-outline-dark"
        disabled={page == 0}
        onClick={() => setPage(() => page - 1)}
      >
        <AiOutlineArrowLeft />
      </button>
      <button
        type="button"
        className="btn btn-outline-dark"
        disabled={page == numPages - 1}
        onClick={() => setPage(() => page + 1)}
      >
        <AiOutlineArrowRight />
      </button>
    </footer>
  );
};
