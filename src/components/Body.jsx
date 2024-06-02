import React from "react";
import RecipeCard from "./RecipeCard";

const Body = ({ mainData, loading, error }) => {
  return (
    <div>
      {/* {!loading && !error && mainData.length === 0 ? (
        <div>
          <p className="text-2xl font-semibold  text-rose-300 lg:text-4xl text-center leading-normal">
            Nothing to show, please search something!
          </p>
        </div>
      ) : null} */}

      {loading && (
        <p>
          {error ? (
            <span className="text-2xl font-semibold  text-rose-300 lg:text-4xl text-center leading-normal">
              {error}
            </span>
          ) : (
            <h1 className="animate-pulse">Loading....</h1>
          )}
        </p>
      )}

      <div className="flex flex-wrap mx-auto justify-center items-center p-3">
        {mainData?.length > 0 &&
          mainData.map((item) => (
            <div key={item.id} className="flex m-4">
              <RecipeCard mainData={item} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Body;
