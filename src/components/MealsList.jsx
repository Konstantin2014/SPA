import MealItem from "./MealItem";
import React from "react";

function MealList({ meals }) {
  return (
    <div className="list">
      {meals.map((meal) => (
        <MealItem key={meal.idMeal} {...meal} />
      ))}
    </div>
  );
}
export default MealList;
