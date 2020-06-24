import React from "react";
import "../Styles/MonsterHome.css";
import monster_droplet from "../Images/monster_droplet.svg";
import money_icon from "../Images/money_icon.svg";
import encyclopedia_icon from "../Images/encyclopedia_icon.svg"
//will have to import all monster images and then update the img src depending on user avatar

export default function MonsterHome() {
  return (
    <div id="container">
      <div className="knowledge-monster-shop">
        <div className="icon-container"></div>
        <div className="icon-container">
          <img src={encyclopedia_icon} alt="encyclopedia_icon" className="icon"/>
        </div>
        <div className="icon-container"></div>
      </div>

      <div className="knowledge-monster-shop">

        <div id="money-container">
          <img src={money_icon} alt="money_icon" id="money-icon" />
        </div>

        <div id="monster-container">
          <img src={monster_droplet} alt="monster_droplet" id="monster-main" />
        </div>

      </div>

      <div className="knowledge-monster-shop">
        <div className="icon-container"></div>
        <div className="icon-container"></div>
        <div className="icon-container"></div>
      </div>
    </div>
  );
}
