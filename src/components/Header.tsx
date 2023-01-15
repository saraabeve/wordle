import React from "react";
import { AppContext } from "../App";
import { useContext } from "react";
import Login from "./login";
import Intro from "./Instructions";

export function Header() {
  const { user, setShowIntro, setShowLogin, setUser } = useContext(AppContext);
  const greetings = "Hello" + " " + user;
  function handleLogout() {
    setUser("Guest");
    localStorage.setItem("user", "Guest");
    setShowLogin(true);
  }
  return (
    <header>
      <span>
        <span>
          <img src="photos/login.jpg" onClick={handleLogout}></img>
          <img
            src="photos/qm.jpg"
            onClick={() => {
              setShowIntro(true);
            }}
          ></img>
        </span>
      </span>
      <span>
        {" "}
        <h1>Wordle</h1>
      </span>
      <span>
        <p
          style={{
            fontSize: 18,
            fontFamily: "monospace",
            fontWeight: 600,
          }}
        >
          {greetings}✌️
        </p>
      </span>
      <Login></Login>
      <Intro></Intro>
    </header>
  );
}
