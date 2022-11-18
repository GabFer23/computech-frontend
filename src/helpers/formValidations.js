// ! ==================================================================================

const loginFormValidations = {
  email: [
    (value) => value.includes('@') && value.includes('.co'),
    'Correo no válido',
  ],
  password: [
    (value) => value.length >= 6,
    'El password debe de tener al menos 6 caracteres.',
  ],
};

// ! ==================================================================================

const registerFormValidations = {
  name: [(value) => value.length >= 1, 'El nombre es obligatorio.'],
  email: [
    (value) => value.includes('@') && value.includes('.co'),
    'Correo no válido',
  ],
  phone: [
    (value) => value.length >= 10,
    'El teléfono debe tener al menos 10 números',
  ],
  password: [
    (value) => value.length >= 6,
    'El password debe de tener al menos 6 caracteres.',
  ],
  // confirmPassword: [(value) => value === password, 'La contraseña no coincide'],
};

// ! ==================================================================================

const computerFormValidations = {
  // * Step One
  title: [(value) => value.length >= 3, 'Título no válido'],
  description: [(value) => value.length >= 3, 'Descripción no válida'],
  price: [(value) => value > 100, 'Precio no válido'],
  screen: [
    (value) => value >= 0 && value <= 20,
    'Tamaño de pantalla no válido',
  ],
  // * Step Two
  storageType: [
    (value) => value !== '',
    'Seleccione un tipo de almacenamiento',
  ],
  storage: [(value) => value > 30, 'Almacenamiento no váido'],
  RAM: [(value) => value >= 4, 'Almacenamiento no váido'],
  OS: [(value) => value !== '', 'Seleccione un sistema operativo'],
  category: [(value) => value !== '', 'Seleccione una categoría'],
  brand: [(value) => value !== '', 'Seleccione una marca'],
  images: [(value = []) => !value.includes(''), 'Las imagenes son obligatorias'],
};

// ! ==================================================================================

export {
  computerFormValidations,
  loginFormValidations,
  registerFormValidations,
};
