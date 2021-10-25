import React from "react";
import CardsMonthly from "./CardsMonthly";
import cardsJSON from "./data.json";

export default function CardMonthly() {
  return (
    <div className="cards-daily">
      {cardsJSON.map((card) => (
        <CardsMonthly
          key={card.title}
          title={card.title}
          current={card.timeframes.monthly.current}
          previous={card.timeframes.monthly.previous}
          background={card.backgorund}
          image={card.image}
        />
      ))}
    </div>
  );
}
