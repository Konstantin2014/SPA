import { useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { getMealById } from "../api";
import Preloader from "../components/Preloader";

function Recipe() {
  const [recipe, setRecipe] = useState({});
  const { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    getMealById(id).then((data) => {
      setRecipe(data.meals[0]);
    });
  }, [id]);
  return (
    <>
      {!recipe.idMeal ? (
        <Preloader />
      ) : (
        <div className="recipe">
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <h1>{recipe.strMeal}</h1>
          <h3>Category: {recipe.strCategory}</h3>
          {recipe.strArea ? <h3>Area: {recipe.strArea}</h3> : null}
          <p>{recipe.strInstructions}</p>
          <table className="centred">
            <thead>
              <tr>
                <th>Ingredient</th>
                <th>Measure</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(recipe).map((key) => {
                if (key.includes("Ingredient") && recipe[key]) {
                  return (
                    <tr key={key}>
                      <td>{recipe[key]}</td>
                      <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                    </tr>
                  );
                }
                return null;
              })}
            </tbody>
          </table>
          {recipe.strYoutube ? (
            <div className="row">
              <h4 style={{ margin: "2rem 0 1.5rem " }}>Video Recipe</h4>
              <iframe
                title={id}
                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                  -11
                )}`}
                allowfullscreen
              />
            </div>
          ) : null}
        </div>
      )}
      <button className="btn orange accent-3" onClick={() => navigate(-1)}>
        Go Back
      </button>
    </>
  );
}
export default Recipe;
