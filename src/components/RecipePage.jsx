import React from "react";
import { useParams } from "react-router-dom";
import useRecipeFetch from "../Hooks/useRecipeFetch";

const RecipePage = () => {
  const { id } = useParams(); //useParams always returns object
  console.log(id);
  const recipeDetails = useRecipeFetch(id);
  console.log(recipeDetails);
  const { image_url, servings, publisher, title, cooking_time, ingredients } =
    recipeDetails;
  return (
    <div>
      <div className="flex p-5 ">
        {" "}
        <div className="border border-black p-2">
          <img src={image_url} className="rounded-md" alt="" />
        </div>
        <div className="p-5 font-serif">
          <h1 className="text-5xl font-serif">Recipe Name: {title}</h1>
          <h3 className="text-3xl font-bold">Publisher : {publisher}</h3>
          <p className="text-xl">Servings : {servings}</p>
          <p className="text-xl">
            Cooking Time :
            {cooking_time <= 60 ? cooking_time : cooking_time / 60}
          </p>
        </div>
      </div>

      <div>
        <h1>INGREDIENTS</h1>
        <ul>
          {ingredients.map((ing) => (
            <li>{ing?.description}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipePage;
