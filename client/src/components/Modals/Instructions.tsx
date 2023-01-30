import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

interface Props {
  showState: boolean;
}

export default function Intro({ showState }: Props) {
  return (
    <Modal show={!showState} keyboard={true} size={"lg"}>
      <Modal.Dialog>
        <Modal.Header closeButton onClick={() => { return showState }}>
          <Modal.Title>
            <h3>how to play?</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="GameIntro">
            <p>
              You have 5 tries to guess the five-letter Wordle. Type in your
              guess and submit your word by hitting the “enter” key on your
              keyboard. The color of the tiles will change after you submit your
              word:
            </p>
            <p>
              <Button variant="warning">yellow</Button> tile indicates that you
              picked the right letter but it’s in the wrong spot.
            </p>
            <p>
              <Button variant="success">green</Button> tile indicates that you
              picked the right letter in the correct spot.
            </p>{" "}
            <p>
              <Button variant="secondary">gray </Button> tile indicates that the
              letter you picked is not included in the word at all.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={()=>{ return showState }}>
            Got it!
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
}
