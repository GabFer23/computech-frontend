export const ComputerData = ({
  title,
  description,
  price,
  screen,
  storageType,
  storage,
  RAM,
  OS,
  category,
  backLightKeyboard,
  brand,
  owner,
}) => {
  return (
    <div className="col-md-7 col-sm-12">
      <h2>{title}</h2>
      <p className="fw-bold m-0">$ {price?.toLocaleString('es-CO')}</p>
      <p>{description}</p>

      <table className="table">
        <tbody>
          <tr>
            <th>Pantalla</th>
            <td>{screen === 0 ? 'N/A': `${screen}"`}</td>
          </tr>
          <tr>
            <th>Tipo de Almacenamiento</th>
            <td className="text-uppercase">{storageType}</td>
          </tr>
          <tr>
            <th>Almacenamiento</th>
            <td className="text-uppercase">
              {storage >= 1000 ? `${storage / 1000} TB` : `${storage} GB`}
            </td>
          </tr>
          <tr>
            <th>RAM</th>
            <td className="text-uppercase">{RAM} GB</td>
          </tr>
          <tr>
            <th>Sistema Operativo</th>
            <td className="text-capitalize">{OS}</td>
          </tr>
          <tr>
            <th>Categoría</th>
            <td className="text-capitalize">{category}</td>
          </tr>
          <tr>
            <th>Teclado Retroiluminado</th>
            <td>{backLightKeyboard ? 'Sí' : 'No'}</td>
          </tr>
          <tr>
            <th>Marca</th>
            <td>{brand?.name}</td>
          </tr>
          <tr>
            <th>Propietario</th>
            <td>
              <p>
                <span className="small d-block text-muted">Nombre</span>
                {owner?.name}
              </p>
              <p>
                <span className="small d-block text-muted">Correo</span>
                {owner?.email}
              </p>
              <p>
                <span className="small d-block text-muted">Teléfono</span>
                {owner?.phone}
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
