import React from "react";
import * as Unicons from "@iconscout/react-unicons";

import "../../App.css";
import "./NavbarComponent.css";

import { navItems } from "./NavbarItems";

const NavbarComponent = () => {
   return (
      <div className="nav">
         <div className="nav__logo">
            <Unicons.UilCube className="nav__logo-icon" />
            <div className="nav__logo-title">react-app</div>
         </div>
         <div className="nav__link">
            {navItems.map((item, i) => {
               return (
                  <div className="nav__item" key={i}>
                     <div className="nav__title">{item.title}</div>
                  </div>
               );
            })}
         </div>
         <div className="nav__btns">
            <button className="btn__nav">Log-in</button>
            <button className="btn__nav">Register</button>
            <div className="nav__img">
               <img src="https://source.unsplash.com/weekly?person" alt="" />
            </div>
         </div>
      </div>
   );
};

export default NavbarComponent;
