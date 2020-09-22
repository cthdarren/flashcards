import React from "react";

interface Props {
  flashcards: any[];
  flashCardCount: number;
  changeFlashcards: (value) => void;
}

const FlashCardInput = (props: Props) => {
  let flashCardArr = [];
  for (let index = 0; index < props.flashCardCount; index++) {
    flashCardArr.push(
      <div>
        {index > 0? (<hr/>): (<React.Fragment/>)}

        <div className="row">
          <div className="deleteFlashCard col-1 p-0">
            <button className="btn btn-sm btn-danger">-</button>
          </div>
          <div className="col">
            <div className="row">
              <div className="col-1 p-0">
                <label className="d-inline-block p-1 w-100 text-right">
                  Q:
                </label>
              </div>
              <div className="col">
                <input
                  className="ml-2 form-control d-inline-block"
                  value={props.flashcards}
                  onChange={(event) =>
                    props.changeFlashcards(event.target.value)
                  }
                />
              </div>
            </div>

            <div className="row">
              <div className="col-1 p-0">
                <label className="d-inline-block p-1 w-100 text-right">
                  A:
                </label>
              </div>

              <div className="col">
                <input
                  className="ml-2 d-inline-block form-control"
                  value={props.flashcards}
                  onChange={(event) =>
                    props.changeFlashcards(event.target.value)
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <div className="container-fluid">{flashCardArr}</div>;
};

export default FlashCardInput;
