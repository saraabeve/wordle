import { wordsList } from "../Data/Wordlist";
import { randomInt } from "crypto";

export function FetchWord():string {
  let randInt = randomInt(0, wordsList.length);
  return String(randInt);
}
export function GetWordById(i: number) {
  return wordsList[i]
}
export function CheckGuessdWord(i: number, guess: string): (object){
  const colorsOfGuess = {};
  const guessed = guess.toLowerCase();
  const word= wordsList[i]
  if (word === guess) {
    return {"state":"win"};
  } else {
    for (let j = 0; j < word.length; j++) {
      console.log(word.charAt(j))
      if (word.charAt(j) === guessed.charAt(j)) {
        colorsOfGuess[guessed.charAt(j)] = "#44FA23";
      } else if (word.includes(guessed.charAt(j))) {
        colorsOfGuess[guessed.charAt(j)] = "#F3FF00";
      } else {
        colorsOfGuess[guessed.charAt(j)] = "#B3B7B4";
      }
    }
  }
  return colorsOfGuess;
}
