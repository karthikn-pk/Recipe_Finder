import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = ({ query, setQuery, handleSearch }) => {
  // const [searchText, setSearchText] = useState("");

  return (
    <div className="flex justify-around py-5 bg-pink-300">
      <div>
        <h1 className="text-4xl font-bold text-red-600 ">
          Recipe <span className="text-green-600">Hunter</span>
        </h1>
      </div>
      <div>
        <input
          type="text"
          className="p-3 rounded-full"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <button
          className="bg-black text-white p-2 font-bold rounded-md ml-3"
          onClick={handleSearch}>
          Search
        </button>
      </div>
      <div>
        <ul className="flex font-bold text-3xl  ">
          <Link to="/">
            <li className="mr-4 cursor-pointer hover:border-b-4 hover:border-green-600">
              Home
            </li>
          </Link>

          <Link to="/Favourites">
            <li className="cursor-pointer hover:border-b-4 hover:border-green-600">
              Favourites
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
