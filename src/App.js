import React, { useRef, useState } from "react";
import { readConfigFile } from "typescript";
import "./App.scss";
import { Board } from "./components/Board";
import { Keyboard } from "./components/Keyboard";
import ReactDOM from "react-dom";
import { Header } from "./components/Header";

function App() {
  const [guesses, setGuesses] = useState([[], [], [], []]);

  function addGuess(ch) {
    if (guesses.length < 5) {
      guesses[0].push(ch);
      setGuesses(guesses);
      console.log(guesses);
    } else if (guesses.length === 5) {
      alert("DONE");
    }
  }
  return (
    <>
      <Header />
      <div className="container">
        <Board />
        <Keyboard />
      </div>
    </>
  );
}

export default App;
