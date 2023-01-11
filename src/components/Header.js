import React from "react";
import { AppContext } from "../App";
import { useContext } from "react";

export function Header() {
  const { user } = useContext(AppContext);
  const greetings = "welcome" + " " + user + "!";
  return (
    <header>
      <h1>Wordle</h1>
      <span>
        {greetings}
        <img src="photos/login.jpg"></img>
      </span>
    </header>
  );
}
