import React from "react";
import Winner from "../Modals/Winner";
import Login from "../Modals/login";

interface props{
  showWinner: boolean;
  showLogin: boolean
  resetGameFunc: any;
}

export function Header({showWinner, resetGameFunc, showLogin}:props) {
  const greetings = "Hello" + " " + localStorage.getItem("user");
  function handleLogout() {
    localStorage.setItem("user", "Guest");
    window.location.reload();
  }
  return (
    <header>
      <Winner showWin={showWinner} resetGame={resetGameFunc} />
      <Login show={showLogin}></Login>
      <span>
        <span>
          <img src="photos/login.jpg" onClick={handleLogout}></img>
          <img
            src="photos/qm.jpg"
          ></img>
        </span>
      </span>
      <span>
        {" "}
        <h2 style={{ fontWeight: 900 }}>Wordle</h2>
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
    </header>
  );
}
