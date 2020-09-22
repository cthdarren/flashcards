import React from "react";
import FlashCardInput from "./FlashCardInput";

interface Props {
  name: string;
  description: string;
  flashcards: any[];
  changeName: (value: any) => void;
  changeDesc: (value: any) => void;
  removeFlashCard: (index: number) => void;
  changeQuestion: (index: number, value: string) => void;
  changeAnswer: (index: number, value: string) => void;
  addFlashCard: () => void;
}

const AddFlashCard = (props: Props) => {
  return (
    <div>
      <div className="text-left">
        <div className="form-group">
          <label>Name: </label>
          <input
            className="form-control"
            value={props.name}
            onChange={(event) => props.changeName(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Description: </label>
          <textarea
            className="form-control"
            onChange={(event) => props.changeDesc(event.target.value)}
          >
            {props.description}
          </textarea>
        </div>
        <div className="form-group">
          <div className="flashCardHeader">
            <label>FlashCards: </label>
            <button
              className=" mb-2 addFcButton btn btn-sm btn-secondary"
              onClick={() =>
                props.addFlashCard()
              }
            >
              +
            </button>
            <hr />
          </div>
          <FlashCardInput
            flashcards={props.flashcards}
            removeFlashCard={props.removeFlashCard}
            changeAnswer={props.changeAnswer}
            changeQuestion={props.changeQuestion}
          />
        </div>
      </div>
    </div>
  );
};

export default AddFlashCard;
