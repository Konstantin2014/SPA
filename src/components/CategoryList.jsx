import CategoryItem from "./CategotyItem";
import React from "react";

function CategoryList({ catalog = [] }) {
  return (
    <div className="list">
      {catalog.map((el) => (
        <CategoryItem key={el.idCategory} {...el} />
      ))}
    </div>
  );
}
export default CategoryList;
