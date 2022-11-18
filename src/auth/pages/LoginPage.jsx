import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AlertMessage } from '../../general/components';
import { loginFormValidations } from '../../helpers';
import { useAuthStore, useForm } from '../../hooks';
import { AuthLayout } from '../layout';

// ! ================================================================================================
// * ======================== DEFINIR LOS CAMPOS DEL FORMULARIO ========================

const formFields = {
  email: '',
  password: '',
};

// ? =================================================================================================================

export const LoginPage = () => {
  // * =================================== ACCEDER AL STORE ===================================

  const { startLogin, errorMessage } = useAuthStore();

  // ! ================================================================================================

  const [formSubmitted, setFormSubmitted] = useState(false);

  // ! ================================================================================================
  // * ================== CUSTOM HOOK PARA MANEJO DEL FORMULARIO ==================

  const {
    email,
    password,
    formState,
    onInputChange,
    isFormValid,
    emailValid,
    passwordValid,
  } = useForm(formFields, loginFormValidations);

  // ! ================================================================================================
  // * ================== MANEJAR ENVÍO DEL FORMULARIO ==================

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormSubmitted(true);

    if (!isFormValid) return;

    startLogin(formState);
  };

  // ! ================================================================================================
  return (
    <AuthLayout>
      <h1 className="text-center text-capitalize fw-bold">Inicia Sesión</h1>

      <form className="d-grid gap-3" onSubmit={handleSubmit}>
        {errorMessage && <AlertMessage message={errorMessage} type="danger" />}

        <div className="form-floating">
          <input
            type="email"
            className={`form-control shadow-none ${
              emailValid && formSubmitted ? 'is-invalid' : ''
            }`}
            id="email"
            name="email"
            placeholder="Correo"
            value={email}
            onChange={onInputChange}
          />
          <label htmlFor="email">Correo</label>
          {emailValid && formSubmitted && (
            <p className="text-danger m-0">{emailValid}</p>
          )}
        </div>

        <div className="form-floating">
          <input
            type="password"
            className={`form-control shadow-none ${
              passwordValid && formSubmitted ? 'is-invalid' : ''
            }`}
            id="password"
            name="password"
            placeholder="Contraseña"
            value={password}
            onChange={onInputChange}
          />
          <label htmlFor="password">Contraseña</label>
          {passwordValid && formSubmitted && (
            <p className="text-danger m-0">{passwordValid}</p>
          )}
        </div>

        <button className="btn btn-primary my-3 w-100">Iniciar Sesión</button>
        <Link to="/auth/register">Registrarse</Link>
      </form>
    </AuthLayout>
  );
};
