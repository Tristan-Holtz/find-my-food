import React from "react";
import "./App.css";
import RestaurantContainer from "../RestaurantContainer/RestaurantContainer";

function App() {
  return (
    <main>
      <header className="header">
        <h1>find my food</h1>
      </header>
      <RestaurantContainer />
    </main>
  );
}

export default App;
