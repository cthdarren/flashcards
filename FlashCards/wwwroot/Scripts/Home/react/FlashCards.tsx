import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Card from "./Card";
import AddFlashCard from "./AddFlashCard";

interface Props {}
interface State {
  cardNames: string[];
  cardId: string[];
  xhr: boolean;
  errMsg: string;
  data: any;
  adding: boolean;
  addName: string;
  addDescription: string;
  addFlashCards: any[];
  addFlashCardCount: number;
}

class FlashCards extends Component<Props, State> {
  state = {
    cardNames: [],
    cardId: [],
    xhr: false,
    errMsg: "",
    data: {},
    adding: false,
    addName: "",
    addDescription: "",
    addFlashCards: [],
    addFlashCardCount: 1
  };

  AddNewFlashCard = async () => {
    this.setState({xhr:true, errMsg: ""});

    const queryRequest = "/Home/AddFlashCardSet"

    const content = await axios({
      method:"post",
      url: queryRequest,
      data:{
          "payload":{
              "name": this.state.addName,
              "desc": this.state.addDescription,
              "flashCards": this.state.addFlashCards
          }
      }
    })
  }

  GetFlashCards = async () => {
    this.setState({ xhr: true, errMsg: "" });
    // get data
    const queryRequest = "/Home/GetFlashCards";

    const content = await axios({
      method: "get",
      url: queryRequest,
    });

    if (content.data.success === true) {
      this.setState({ data: content.data.payload });
    } else {
      this.setState({ errMsg: content.data.msg });
    }
    this.setState({ xhr: false });
  };

  changeNameValue = (value) => {
      this.setState({addName: value})
  };
  changeDescValue = (value) => {
      this.setState({addDescription: value})
    
  };
  changeFlashcardValue = (value) => {
    this.setState({addFlashCards: value})

  };
  changeFlashcardCount = (value) => {
    this.setState({addFlashCardCount: value})

  };

  render() {
    return (
      <div>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Add a new set of Flash Cards
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <AddFlashCard
                  name={this.state.addName}
                  description={this.state.addDescription}
                  flashcards={this.state.addFlashCards}
                  changeName={(value) => this.changeNameValue(value)}
                  changeDesc={(value) => this.changeDescValue(value)}
                  changeFlashcards={(value) => this.changeFlashcardValue(value)}
                  flashCardCount={this.state.addFlashCardCount}
                  changeFlashCardCount={(value) => this.changeFlashcardCount(value)}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary"  onClick={this.AddNewFlashCard}>
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <button
                type="button"
                className="addbtn btn btn-primary"
                data-toggle="modal"
                data-target="#exampleModal"
                onClick={() => this.setState({ adding: true })}
              >
                Add a new set of flashcards
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<FlashCards />, document.querySelector("#root"));
