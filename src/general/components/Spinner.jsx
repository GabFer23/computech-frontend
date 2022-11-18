export const Spinner = () => {
  return (
    <div
      className="spinner-border m-auto"
      style={{ width: '3rem', height: '3rem' }}
      role="status"
    >
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};
