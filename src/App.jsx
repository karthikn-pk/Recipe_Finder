import NavBar from "./components/NavBar";
import Body from "./components/Body";
import React, { useState } from "react";
import useFetch from "./Hooks/useFetch";
import { Route, Routes } from "react-router-dom";
import RecipePage from "./components/RecipePage";
import Favourites from "./components/Favourites";

function App() {
  const [query, setQuery] = useState("");

  const { searchAPIData, loading, error } = useFetch(query);
  return (
    <>
      <NavBar setQuery={setQuery} />
      <Routes>
        <Route
          path="/"
          element={
            <Body mainData={searchAPIData} loading={loading} error={error} />
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
