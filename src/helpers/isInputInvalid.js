export const isInputInvalid = (isValid, formSubmitted) => {
  return `form-control shadow-none text-capitalize ${
    isValid && formSubmitted ? 'is-invalid' : ''
  }`;
};
