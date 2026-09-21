function Scientist({ name, image, description }) {
  return (
    <div className="scientist-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Scientist;