import React, { useState } from "react";
import "./App.css";
import FlashCard from "./components/Flashcard";

const App = () => {
  return (
    <div className="App">
      <h1>Guess K-pop Celebrity</h1>
      <h3>Do you know all these K-pop celebrities? Let's get started!</h3>
      <h3>Number of cards: 10</h3>
      <FlashCard />
    </div>
  );
};

export default App;
