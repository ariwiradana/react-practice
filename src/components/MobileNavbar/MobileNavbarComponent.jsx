import React from "react";
import { Link } from "react-router-dom";
import * as Unicons from "@iconscout/react-unicons";

import "../../App.css";
import "./MobileNavbarComponent.css";

import { mobileNavItems } from "./MobileNavbarItems";

const MobileNavbarComponent = (props) => {
   return (
      <div
         className={
            props.showMobileNav
               ? "mobile__nav-container mobile__nav-active"
               : "mobile__nav-container"
         }
      >
         <div className="mobile__nav">
            <Unicons.UilTimes
               size="26"
               onClick={() => props.setShowMobileNav(false)}
               className="mobile__nav-close"
            />

            {mobileNavItems.map((item, i) => {
               return (
                  <Link
                     onClick={() => props.setShowMobileNav(false)}
                     key={i}
                     className="mobile__nav-link"
                     to={item.path}
                  >
                     {item.title}
                  </Link>
               );
            })}
         </div>
      </div>
   );
};

export default MobileNavbarComponent;
