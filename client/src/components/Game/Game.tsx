import React from "react";
import { useWordle } from "../../Hooks/useWordle";
import { useEffect } from "react"
import { Board } from "../Board/Board";
import { Keyboard } from "../Keyboard/Keyboard";
import { Header } from "../Header/Header";
import Login from "../Modals/login";
import Intro from "../Modals/Instructions";
import Winner from "../Modals/Winner";

export function Game(){
const GameLogic = useWordle();
  useEffect(() => {
    window.addEventListener('keyup', GameLogic.handleKeyup);
    if (GameLogic.gameMode!= 'ON') {
      window.removeEventListener('keyup', GameLogic.handleKeyup);
    }
    if (GameLogic.turn >= 5) {
      window.removeEventListener('keyup', GameLogic.handleKeyup)
    }
    return () => window.removeEventListener('keyup', GameLogic.handleKeyup);
  }, [GameLogic.handleKeyup,GameLogic.gameMode, GameLogic.turn]);

  return (
    <>
      <Header showWinner={GameLogic.showWin} resetGameFunc={GameLogic.resetBoard }/>
      <div className="container">
        <Board currentGuess={GameLogic.currentGuess} guesses={GameLogic.guesses} turn={GameLogic.turn} />
        <Keyboard colorKey={GameLogic.GuessColors} />
        </div>
   </>
  );
}
