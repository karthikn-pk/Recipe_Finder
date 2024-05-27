import NavBar from "./components/NavBar";
import Body from "./components/Body";
import React, { useState } from "react";
import useFetch from "./Hooks/useFetch";
import { Route, Routes } from "react-router-dom";
import RecipePage from "./components/RecipePage";
import Favourites from "./components/Favourites";

function App() {
  const [query, setQuery] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  // const { searchAPIData, loading, error } = useFetch(query);
  const handleSearch = () => {
    // console.log(searchText);
    fetchData(query);

    setQuery("");
  };
  const fetchData = async (query) => {
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

  return (
    <>
      <NavBar query={query} setQuery={setQuery} handleSearch={handleSearch} />
      <Routes>
        <Route
          path="/"
          element={
            <Body mainData={searchData} loading={loading} error={error} />
          }
        />
        <Route path="/recipe-item" element={<RecipePage />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
