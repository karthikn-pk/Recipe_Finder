import { useEffect, useState } from "react";

const useRecipeFetch = (id) => {
  const [recipeDetails, setRecipeDetails] = useState(null);
  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        const data = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
        );
        const res = await data.json();
        setRecipeDetails(res?.data?.recipe);
      } catch (error) {
        console.error(error);
      }
    };
    fetchIngredients();
  }, [id]);
  return recipeDetails;
};

export default useRecipeFetch;
