import React, { useRef, useState } from "react";
import { readConfigFile } from "typescript";
import "./App.scss";
import { Board } from "./components/Board";
import { Keyboard } from "./components/Keyboard";
import ReactDOM from "react-dom";
import { Header } from "./components/Header";
import { AuthContext } from "./context/auth";

function App() {
  const [guesses, setGuesses] = useState([[], [], [], [], []]);

  return (
    <AuthContext.Provider value={{ guesses, setGuesses }}>
      <Header />
      <div className="container">
        <Board />
        <Keyboard />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
