import React from "react";
import { useParams } from "react-router-dom";
import useRecipeFetch from "../Hooks/useRecipeFetch";

const RecipePage = () => {
  const { id } = useParams(); //useParams always returns object
  console.log(id);
  const recipeDetails = useRecipeFetch(id);
  console.log(recipeDetails);
  return <div>RecipePage ye t to show</div>;
};

export default RecipePage;
