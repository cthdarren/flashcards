import React from "react";

interface Props {
  name: string;
  description: string;
  flashcards: any[];
  changeName: (value: any) => void;
  changeDesc: (value: any) => void;
  changeFlashcards: (value: any) => void;
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
          >{props.description}</textarea>
        </div>
        <div className="form-group">
          <label>FlashCards: </label>
          <input
            className="form-control"
            value={props.flashcards}
            onChange={(event) => props.changeFlashcards(event.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default AddFlashCard;
