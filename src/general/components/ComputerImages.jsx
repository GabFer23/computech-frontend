import { CarouselImage } from './';

export const ComputerImages = ({ images = [], title }) => {
  return (
    <div className="col-md-5 col-sm-12">
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {images.map((image, i) => (
            <CarouselImage key={i} image={image} title={title} i={i} />
          ))}
        </div>

        <button
          className="carousel-control-prev bg-dark bg-opacity-50"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next bg-dark bg-opacity-50"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};
