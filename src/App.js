import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const APP_ID = "ea7e7fd3";
  const APP_KEY = "3794c105773177f9d3c3189c7c94e59e";
  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("Effect has been run");
  });

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button
          onClick={() => setCounter(counter + 1)}
          className="search-button"
          type="submit"
        >
          {counter}
        </button>
      </form>
    </div>
  );
};

export default App;
