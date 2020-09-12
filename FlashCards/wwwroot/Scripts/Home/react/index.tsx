import React, { Component } from "react";
import ReactDOM from "react-dom";

interface Props {}


class Home extends Component<Props> {
  state = {};

  render() {
    return (
      <div>
          
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src="https://c7.alamy.com/comp/X5B5JA/businessman-trying-to-smother-his-colleague-X5B5JA.jpg" alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="https://pbs.twimg.com/media/DoQGxT6W0AAPred?format=png&name=small" alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="https://nexter.org/wp-content/uploads/2019/07/weird-stock-images-photos-funny-pic46.jpg" alt="Third slide" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Home />, document.querySelector("#root"));
