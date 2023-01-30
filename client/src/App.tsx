import React, { useState, createContext, useEffect } from "react";
import "./App.scss";
import { Game } from "./components/Game/Game";



function App() {
  localStorage.setItem("user", "Guest")
  return (
        <>
      <Game/>
        </>
  );
}

export default App;
