import React, { useEffect, useState } from "react";

const useFetch = (query) => {
  const [searchData, setSearchData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes?search=${query}`
        );
        const data = await response.json();
        setSearchData(data?.data?.recipes || []);
      } catch (error) {
        console.log(error);
        setError(error);
        setSearchData([]);
      }
    };
    if (query) {
      fetchData();
    }
  }, [query]);

  return [searchData, loading, error];
};

export default useFetch;
