import React from "react";
import {
  BrowserRouter,
  Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import CardDaily from "./CardDaily";
import CardWeekly from "./CardWeekly";
import CardMonthly from "./CardMonthly";
import "./Cards.css";

import image from "./images/image-jeremy.png";
import cardsJSON from "./data.json";

/*const cartas = cardsJSON.map((card) => {
  console.log(card.timeframes.daily);
});*/

export default function PersonCard() {
  return (
    <div className="person-card">
      <BrowserRouter>
        <div className="full">
          <div className="information">
            <div className="information-img-txt">
              <img src={image} alt="" />
              <div className="text-info">
                <h5 class="text">Report for</h5>
                <h2 class="text-name">jeremy robson</h2>
              </div>
            </div>
            <div className="menu">
              <li>
                <NavLink exact to="/daily" activeClassName="active">
                  Daily
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/weekly" activeClassName="active">
                  Weekly
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/monthly" activeClassName="active">
                  Monthly
                </NavLink>
              </li>
            </div>
          </div>

          <div className="routes">
            <Switch>
              <Route path="/daily">
                <CardDaily />
              </Route>
              <Route path="/weekly">
                <CardWeekly />
              </Route>
              <Route path="/monthly">
                <CardMonthly />
              </Route>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}
