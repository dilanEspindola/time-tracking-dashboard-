import React from "react";
import CardDaily from "./CardDaily";
import PersonCard from "./PersonCard";
import CardWeekly from "./CardWeekly";
import "./Cards.css";

export default function Cards() {
  return (
    <div className="cards">
      <PersonCard />
    </div>
  );
}
