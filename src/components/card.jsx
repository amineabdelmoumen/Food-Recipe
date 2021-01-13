import react from "react";

const ResultCard = ({ recipe }) => {
  const { label, image, url, ingredients } = recipe.recipe;
  return (
    <div className="m-2">
      <h2>{label}</h2>
      <img src={image} alt={label} />
      <a href={url} target="_blank" rel="noopener noreferrer">
        Recipe
      </a>
    </div>
  );
};
export default ResultCard;
