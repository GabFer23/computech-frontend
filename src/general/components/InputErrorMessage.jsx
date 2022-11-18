export const InputErrorMessage = ({ message }) => {
  if (!message) return;

  return <p className="text-danger m-0">{message}</p>;
};
