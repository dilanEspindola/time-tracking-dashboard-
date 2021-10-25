import React from "react";
import "./Cards.css";
import CardsDaily from "./CardsDaily";
import cardsJSON from "./data.json";

export default function CardDaily() {
  return (
    <div className="cards-daily">
      {cardsJSON.map((card) => (
        <CardsDaily
          key={card.title}
          title={card.title}
          current={card.timeframes.daily.current}
          previous={card.timeframes.daily.previous}
          background={card.backgorund}
          image={card.image}
        />
      ))}
    </div>
  );
}
