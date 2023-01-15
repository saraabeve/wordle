import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useContext } from "react";
import { AppContext } from "../App";
import { useRef } from "react";
import { DefaultBoard } from "../Structures";
import { Board } from "./Board";

export default function Login() {
  const { showLogin, setShowLogin, user, setUser, setBoard } =
    useContext(AppContext);
  const InputName = useRef(null);
  const handleClose = () => setShowLogin(false);
  const handleShow = () => setShowLogin(true);
  function handleLogin() {
    const name = InputName.current.value;
    if (name) {
      setUser(name);
      localStorage.setItem("user", name);
    }
    setBoard(DefaultBoard);
    handleClose();
  }
  return (
    <Modal
      show={showLogin}
      onHide={handleClose}
      centered={true}
      keyboard={true}
    >
      <Modal.Dialog>
        <Modal.Header closeButton onClick={handleClose}>
          <Modal.Title>
            <h3>welcome🌻</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="login">
            <form action="/">
              <input
                type="text"
                placeholder={"name"}
                className="login"
                ref={InputName}
              ></input>
              {/* <input
                type="text"
                placeholder={"email"}
                className="login"
              ></input> */}
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleLogin} className="login">
            Let's play
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
}
