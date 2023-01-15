import React, { useRef, useState, createContext, useEffect } from "react";
import { readConfigFile } from "typescript";
import "./App.scss";
import { Board } from "./components/Board";
import { Keyboard } from "./components/Keyboard";
import { Header } from "./components/Header";
import { DefaultBoard } from "./Structures";

export const AppContext = createContext(null);

function App() {
  const [board, setBoard] = useState(DefaultBoard);
  const [currentGuess, setCurrentGuess] = useState({ row: 0, pos: 0 });
  const [user, setUser] = useState("Guest");
  const [showLogin, setShowLogin] = useState(true);
  const [showIntro, setShowIntro] = useState(false);

  return (
    <>
      <AppContext.Provider
        value={{
          board,
          setBoard,
          currentGuess,
          setCurrentGuess,
          user,
          setUser,
          showLogin,
          setShowLogin,
          showIntro,
          setShowIntro,
        }}
      >
        <Header />
        <div className="container">
          <Board />
          <Keyboard />
        </div>
      </AppContext.Provider>
    </>
  );
}

export default App;
