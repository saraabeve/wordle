import { useState, useEffect } from "react";
import { getRandonWord } from "./server-request";
import { getGuessSolution } from "./server-request";
import { getWordByID } from "./server-request";

interface Guess {
  key: string;
  color: string;
}

export function useWordle() {
  const defaultCurrentGuess: string | null=null;
  const defaultGuesses: Array<Guess[]> | null = null;
  const [currentGuess, setCurrentGuess] = useState(defaultCurrentGuess??'');
  const [guesses, setGuesses] = useState<Array<Guess[]>>(
    defaultGuesses ?? Array(5).fill(undefined));
  const [Word, setWord] = useState(" ");
  const [showInfo, setShowInfo] = useState(false)
  const [showLogin, setShowlogin]= useState(false)
  const [gameMode, setgameMode] = useState("ON");
  const [turn, setTurn] = useState(0)
  const [GuessColors, setGuessColors] = useState({})
  const[showWin, setShowWin]=useState(false)
  

 function resetBoard(){
    setTurn(0);
    setCurrentGuess('');
    setGuesses(Array(5).fill(undefined));
    setgameMode("ON");
    setWord(" ")
   setGuessColors({})
   setShowWin(false)
  }

  useEffect(() => {
    getRandonWord().then((Word) => setWord(Word));
  }, []);
  
  async function submitGuess() {
    const solution = await getGuessSolution(Word, currentGuess);
    if (solution['state'] === 'win') {
      setgameMode("WIN")
    }
    setGuessColors(solution)
    const submittedGuess: Guess[] = [...currentGuess].map((letter) => {
      return {
        key: letter.toUpperCase(),
        color: solution[letter]
      };
    });
    setGuesses((prev) => {
      const guessessBoard = [...prev];
      guessessBoard[turn] = submittedGuess;
      return guessessBoard;
    });
    setTurn((prev) => {
      const newTurnValue = prev + 1;
      return newTurnValue;
    });
  }

  function endGame() {
    if (gameMode === "WIN") {
      setShowWin(true)
    }
    // getWordByID(Word).then((res) => setWord(res))
     
  }
  function endTurn() {
    if (turn === 5){
      setgameMode("LOST")
      resetBoard()
    }
    if (gameMode != "ON") {
      endGame()
    }
    setCurrentGuess('');
  }

  const handleKeyup = ({ key }: KeyboardEvent | { key: string }) => {
    if (showInfo || showLogin) return;
    if (/^[a-zA-Z]$/.test(key) && currentGuess.length < 5) {
      setCurrentGuess((prev) => {
        const newCurrentGuess = prev + key;
        return newCurrentGuess;
      });
    }
    else if (key === 'Backspace') {
      setCurrentGuess((prev) => {
        const newCurrentGuess = prev.slice(0, -1);
        return newCurrentGuess;
      });
    }
    else if (key === 'Enter'&& currentGuess.length===5) {
      submitGuess();
      endTurn();
      
    }
  };

 
   return {
    guesses,
    currentGuess,
    Word,
    turn,
    gameMode,
    GuessColors,
    handleKeyup,
    resetBoard,
     setgameMode,
     setShowInfo,
     setShowlogin,
     showWin,
     showLogin
  };
}

  