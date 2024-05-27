import { useEffect } from "react";

const useRecipeFetch = (id) => {
  const [ingredient, setIngredient] = useState({});
  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        const data = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
        );
        const res = data.json();
        setIngredient(res?.data?.recipe);
      } catch (error) {
        console.error(error);
      }
    };
    if (id) {
      fetchIngredients();
    }
  }, [id]);
  return ingredient;
};

export default useRecipeFetch;
