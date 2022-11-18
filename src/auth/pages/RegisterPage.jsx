import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AlertMessage } from '../../general/components';
import { registerFormValidations } from '../../helpers';
import { useAuthStore, useForm } from '../../hooks';
import { AuthLayout } from '../layout';

// ! ================================================================================================
// * ======================== DEFINIR LOS CAMPOS DEL FORMULARIO ========================

const formFields = {
  name: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
};

// ? =================================================================================================================

export const RegisterPage = () => {
  // * =========================== DATOS DEL STORE ===========================

  const { startRegister, errorMessage } = useAuthStore();

  // ! ================================================================================================
  // * =================================== DEFINIR LAS VALIDACIONES ===================================

  const formValidations = {
    ...registerFormValidations,
    confirmPassword: [
      (value) => value === password,
      'La contraseña no coincide',
    ],
  };

  // ! ================================================================================================
  // * ================== CUSTOM HOOK PARA MANEJO DEL FORMULARIO ==================

  const {
    name,
    email,
    phone,
    password,
    confirmPassword,
    formState,
    onInputChange,
    isFormValid,
    nameValid,
    emailValid,
    phoneValid,
    passwordValid,
    confirmPasswordValid,
  } = useForm(formFields, formValidations);

  // ! ================================================================================================

  const [formSubmitted, setFormSubmitted] = useState(false);

  // ! ================================================================================================
  // * =========================== CONTROLAR ENVÍO DE FORMULARIO ===========================

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormSubmitted(true);

    if (!isFormValid) return;

    startRegister(formState);
  };

  // ! ================================================================================================

  return (
    <AuthLayout onSubmit={handleSubmit}>
      <h1 className="text-center text-capitalize fw-bold">Registrarse</h1>

      <form onSubmit={handleSubmit} className="d-grid gap-3">
        {errorMessage && <AlertMessage message={errorMessage} type="danger" />}

        <div className="form-floating">
          <input
            type="text"
            className={`form-control shadow-none ${
              nameValid && formSubmitted ? 'is-invalid' : ''
            }`}
            name="name"
            id="nombre"
            placeholder="Nombre"
            value={name}
            onChange={onInputChange}
          />
          <label htmlFor="nombre">Nombre de Usuario</label>
          {nameValid && formSubmitted && (
            <p className="text-danger m-0">{nameValid}</p>
          )}
        </div>

        <div className="form-floating">
          <input
            type="email"
            className={`form-control shadow-none ${
              emailValid && formSubmitted ? 'is-invalid' : ''
            }`}
            name="email"
            id="email"
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
            type="number"
            className={`form-control shadow-none ${
              phoneValid && formSubmitted ? 'is-invalid' : ''
            }`}
            name="phone"
            id="phone"
            placeholder="Teléfono"
            value={phone}
            onChange={onInputChange}
          />
          <label htmlFor="phone">Teléfono</label>
          {phoneValid && formSubmitted && (
            <p className="text-danger m-0">{phoneValid}</p>
          )}
        </div>

        <div className="form-floating">
          <input
            type="password"
            className={`form-control shadow-none ${
              passwordValid && formSubmitted ? 'is-invalid' : ''
            }`}
            name="password"
            id="password"
            placeholder="Contraseña"
            value={password}
            onChange={onInputChange}
          />
          <label htmlFor="password">Contraseña</label>
          {passwordValid && formSubmitted && (
            <p className="text-danger m-0">{passwordValid}</p>
          )}
        </div>

        <div className="form-floating">
          <input
            type="password"
            className={`form-control shadow-none ${
              confirmPasswordValid && formSubmitted ? 'is-invalid' : ''
            }`}
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirmar contraseña"
            value={confirmPassword}
            onChange={onInputChange}
          />
          <label htmlFor="confirmPassword">Contraseña</label>
          {confirmPasswordValid && formSubmitted && (
            <p className="text-danger m-0">{confirmPasswordValid}</p>
          )}
        </div>

        <button className="btn btn-primary w-100">Registrar</button>

        <Link to="/auth/login">Iniciar Sesión</Link>
      </form>
    </AuthLayout>
  );
};
