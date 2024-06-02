import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ mainData }) => {
  const { publisher, image_url, title, id } = mainData;

  return (
    <div>
      <div className="w-80 overflow-hidden bg-pink-200 p-5 rounded-2xl shadow-xl shadow-rose-100 border-2 border-white flex flex-col gap-5">
        <div className="h-40 overflow-hidden flex justify-center items-center rounded-lg">
          {" "}
          <img src={image_url} alt={title} />
        </div>

        <p className="font-bold">{publisher}</p>
        <h2 className="text-2xl font-medium truncate capitalize">{title}</h2>
        <Link to={`/recipe-item/${id}`}>
          {" "}
          <button className="bg-green-400 p-2 w-30 text-xl font-bold rounded-md">
            View Recipe
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
