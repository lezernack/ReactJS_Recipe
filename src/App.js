import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const APP_ID = "ea7e7fd3";
  const APP_KEY = "3794c105773177f9d3c3189c7c94e59e";

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = response.json();
    console.log(data);
  };

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default App;
