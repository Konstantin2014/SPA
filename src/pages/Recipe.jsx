import { useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { getMealById } from "../api";
import Preloader from "../components/Preloader";

function Recipe() {
  const [recipe, setRecipe] = useState({});
  const { id } = useParams();
  const { goBack } = useNavigate();

  useEffect(() => {
    getMealById(id).then((data) => {
      setRecipe(data.meals[0]);
    });
  }, [id]);
  return (
    <>
      <button className="btn" onClick={goBack}>
        Go Back
      </button>
      {!recipe.idMeal ? (
        <Preloader />
      ) : (
        <div className="recipe">
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <h1>{recipe.strMeal}</h1>
        </div>
      )}
    </>
  );
}
export default Recipe;
