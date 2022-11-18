import { useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { FaUserAlt } from 'react-icons/fa';
import { FiLogOut, FiLogIn } from 'react-icons/fi';
import computechLogo from '../../assets/img/logo.png';

import { useAuthStore } from '../../hooks';

export const Navbar = () => {
  // * ============================= ACCEDER AL STORE DE AUTH =============================
  const { status, user, startLogout } = useAuthStore();
  // ! ================================================================================================

  const { pathname, search } = useLocation();

  // ! ================================================================================================

  const { q = '' } = queryString.parse(search);

  // ! ================================================================================================

  const navigate = useNavigate();

  // ! ================================================================================================

  const [searchText, setSearchText] = useState(q);

  // ! ================================================================================================

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${searchText}`);
  };

  // ! ================================================================================================

  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark text-center">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand fs-5">
          <img
            src={computechLogo}
            alt="logo"
            className="navbar-brand"
            style={{ width: '30px' }}
          />
          Computech
        </Link>
        <button
          className="navbar-toggler shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className={() =>
                  pathname === '/' ? 'nav-link active' : 'nav-link'
                }
                to="/"
              >
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              {status === 'authenticated' && (
                <NavLink className="nav-link" to="/dashboard">
                  Gestionar
                </NavLink>
              )}
            </li>
          </ul>

          <form className="w-100 px-md-5" onSubmit={handleSubmit}>
            <input
              className="form-control shadow-none"
              type="search"
              placeholder="Buscar..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </form>

          <ul className="navbar-nav px-lg-5 py-2 dropdown-center">
            <li className="nav-item">
              {status === 'authenticated' ? (
                <>
                  <button
                    className="dropdown-toggle btn btn-outline-light"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <FaUserAlt />
                    <p className="d-inline px-1 m-0 text-capitalize">
                      {user.name}
                    </p>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-dark dropdown text-center">
                    <li>
                      <button className="dropdown-item" onClick={startLogout}>
                        <p className="d-inline px-1 m-0">Cerrar Sesión</p>
                        <FiLogOut />
                      </button>
                    </li>
                  </ul>
                </>
              ) : (
                <Link
                  to="/auth/login"
                  className="btn btn-outline-light d-flex justify-content-center"
                >
                  <FiLogIn className="fs-5" />
                  <p className="d-inline px-1 m-0">Acceder</p>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
