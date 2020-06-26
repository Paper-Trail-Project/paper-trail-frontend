import React from "react";
import { Link } from "react-router-dom";
import "../Styles/MonsterHome.css";
// import monster_droplet from "../Images/monster_droplet.svg";
import money_icon from "../Images/money_icon.svg";
import encyclopedia_icon from "../Images/encyclopedia_icon.svg";
import face_off_icon from "../Images/face_off_icon.svg";
import quest_icon from "../Images/quest_icon.svg";
import shop_icon from "../Images/shop_icon.svg";
//will have to import all monster images and then update the img src depending on user avatar

export default function MonsterHome() {
  return (
    <>
      <h1>Welcome, {localStorage.name}</h1>
      <div id="money-container">
            <img src={money_icon} alt="money_icon" id="money-icon" style={{width: "45px"}}/>
            <p>
              {localStorage.money >= 0 ? localStorage.money : `You're broke!`}
            </p>
          </div>

      <div id="container">
        <div className="knowledge-monster-shop">
          <div className="icon-container"></div>
          <div className="icon-container">
            <Link to="/encyclopedia">
              <img
                src={encyclopedia_icon}
                alt="encyclopedia_icon"
                id="encyclopedia-icon"
              />
            </Link>
          </div>
          <div className="icon-container"></div>
        </div>

        <div className="knowledge-monster-shop">
          <div id="monster-container">
            <img
              style={{width: "250px", height: "250px"}}
              src={localStorage.monster_img}
              alt="monster_droplet"
              id="monster-main"
            />
          </div>
        </div>

        <div className="knowledge-monster-shop">

          <div className="icon-container">
            <img src={face_off_icon} 
            id="face-off-icon"
            alt="face_off_icon" 
            />
          </div>

          <div className="icon-container" >
            <img src={quest_icon} alt="quest_icon" 
            id="quest-icon"/>
          </div>

          <div className="icon-container">
            <img src={shop_icon} alt="shop_icon" 
            id="shop-icon" />
          </div>

        </div>

      </div>
    </>
  );
}
