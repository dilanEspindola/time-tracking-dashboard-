import React from "react";
import "./Cards.css";

export default function CardsWeekly(props) {
  const { title, current, previous, background, image } = props;

  return (
    <div className="card-activity" style={{ background: background }}>
      <div className="img" style={{ background: background }}>
        <img src={image} alt="" />
      </div>
      <div className="content">
        <h3 className="activity"> {title} </h3>
        <h1 className="current"> {current} hrs</h1>
        <h3 className="previous">last week {previous} hrs</h3>
      </div>
    </div>
  );
}
