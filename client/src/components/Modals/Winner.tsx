import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

interface Props {
  showWin: boolean;
  resetGame: any;
}

export default function Winner({ showWin, resetGame }: Props) {
  return (
      <Modal show={showWin} centered={true} keyboard={true} animation={true} size={"lg"} autoFocus={true}>
              <Modal.Header>
          <Modal.Title>
            <h3 style={{color:"greenyellow"}}>  !!!!WINNER!!!!  </h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body >
             if you want to play again clicked the start button 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={()=>resetGame()}>
           start
          </Button >
        </Modal.Footer>
      </Modal>
  );
}
