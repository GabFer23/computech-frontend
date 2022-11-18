import { Link } from 'react-router-dom';
import { formatDistance, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';

export const ComputerCard = ({ _id, title, price, images, createdAt }) => {
  const date = formatDistance(parseISO(createdAt), new Date(), {
    addSuffix: true,
    locale: es,
  });

  // ! ================================================================================================

  return (
    <Link to={`/computer/${_id}`} className="text-dark text-decoration-none">
      <div className="card shadow-sm h-100">
        <img
          src={images[0]}
          alt={title}
          style={{
            height: '300px',
            objectPosition: 'center',
            objectFit: 'contain',
          }}
        />
        <div className="card-body">
          <p className="text-muted m-0">{date}</p>
          <h6 className="card-title text-capitalize">{title}</h6>
          <p className="card-text">$ {price.toLocaleString('es-CO')}</p>
        </div>
      </div>
    </Link>
  );
};
