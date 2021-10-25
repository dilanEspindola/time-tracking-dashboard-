import React from "react";
import "./Cards.css";
import CardsWeekly from "./CardsWeekly";
import cardsJSON from "./data.json";

export default function CardWeekly() {
  return (
    <div className="cards-daily">
      {cardsJSON.map((card) => (
        <CardsWeekly
          key={card.title}
          title={card.title}
          current={card.timeframes.weekly.current}
          previous={card.timeframes.weekly.previous}
          background={card.backgorund}
          image={card.image}
        />
      ))}
    </div>
  );
}
