import React from "react";
import { Letter } from "../Letter/Letter";

interface letterGuess {
  key: string;
  color: string;
}
interface RowProps {
  rowGuess?: letterGuess[] | undefined;
  currentGuess?: string;
  
}
interface BoardProps {
  currentGuess: string;
  guesses: Array<letterGuess[]>;
  turn: number;
}

const Row = ({ rowGuess, currentGuess }: RowProps) => {

  if (currentGuess != undefined) {
    const letters = [...currentGuess].map((letter) => {
      return {
        key: letter,
        color: 'white',
      };
    });
    return (
      <div className="row">
        {letters.map((letterGuess, index) => (
          <Letter key={index} val={letterGuess.key} color={letterGuess.color} />
        ))}
        {[...Array(5 - letters.length)].map((_, index) =>
          <Letter key={index} val={" "} color={'white'} />
        )}
      </div>
    )
  }
  if (rowGuess === undefined) {
     const index = [0, 1, 2, 3, 4]
    return (
      <div className="row">
        {index.map((j) => (
        <Letter key={j} val={" "} color={"white"} />
      ))}
      </div>
    );
  }
  return (
    <div className="row">
      {rowGuess.map((letterGuess, index) => (
        <Letter
          key={index}
          val={letterGuess.key}
          color={letterGuess.color}
          pos={index}
        />
      ))}
    </div>
  );
};


export function Board({ currentGuess, guesses, turn }: BoardProps) {
  const index = [0, 1, 2, 3, 4];
  return <div className="board"> {guesses.map((guess, index) => {
    if (turn === index) {
          return <Row key={index} currentGuess={currentGuess} />;
        }
    return <Row key={index} rowGuess={guess} />;
  })}
  </div>
}