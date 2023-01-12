import React, { useRef, useState, createContext, useEffect } from "react";
import { readConfigFile } from "typescript";
import "./App.scss";
import { Board } from "./components/Board";
import { Keyboard } from "./components/Keyboard";
import { Header } from "./components/Header";
import { DefaultBoard } from "./Structures";
import "bootstrap/dist/css/bootstrap.min.css";

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(DefaultBoard);
  const [currentGuess, setCurrentGuess] = useState({ row: 0, pos: 0 });
  const [user, setUser] = useState("Guest");

  return (
    <div>
      <AppContext.Provider
        value={{
          board,
          setBoard,
          currentGuess,
          setCurrentGuess,
          user,
          setUser,
        }}
      >
        <Header />
        <div className="container">
          <Board />
          <Keyboard />
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
