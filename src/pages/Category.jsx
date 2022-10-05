import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getFilteredCategory } from "../api";
import Preloader from "../components/Preloader";
import MealList from "../components/MealsList";
import React from "react";

function Category() {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    getFilteredCategory(name).then((data) => setMeals(data.meals));
  }, [name]);

  return (
    <>
      <button className="btn orange accent-3" onClick={() => navigate(-1)}>
        Go Back
      </button>
      {!meals.length ? <Preloader /> : <MealList meals={meals} />}
    </>
  );
}
export default Category;
