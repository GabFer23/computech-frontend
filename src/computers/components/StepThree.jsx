import { ImageInput } from './';

// ? =================================================================================================================

export const StepThree = ({ formState, setFormState, formSubmitted }) => {
  const handleAddImage = (e, position) => {
    let images = [...formState.images];

    images[position] = e.target.value;

    setFormState({ ...formState, images });
  };

  // ! ==================================================================================

  return (
    <>
      {formState.images.map((image, i) => (
        <ImageInput
          image={image}
          position={i}
          key={i}
          handleAddImage={handleAddImage}
          error={formSubmitted && image.length < 10}
        />
      ))}
    </>
  );
};
