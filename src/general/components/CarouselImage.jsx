export const CarouselImage = ({ image, title, i }) => {
  return (
    <div className={`carousel-item w-100 ${i === 0 ? 'active' : ''}`}>
      <img
        src={image}
        className="d-block w-100"
        style={{
          height: '500px',
          width: '100%',
          objectFit: 'contain',
          objectPosition: 'center',
        }}
        alt={title + ' ' + i}
      />
    </div>
  );
};
