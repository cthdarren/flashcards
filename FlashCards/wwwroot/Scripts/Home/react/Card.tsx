import React, { ReactElement } from "react";

interface Props {
  title: string;
  desc: string;
  id: string;
}

const Card = (props: Props) => {
  return (
    <div>
      <div className="card">
        <div className="card-header">{props.title}</div>
        <div className="card-body">
          <p className="card-text">{props.desc}</p>
          <a href="{this.props.id}" className="btn btn-primary">
            Practice!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
