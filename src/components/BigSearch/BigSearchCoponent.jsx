import React from "react";
import * as Unicons from "@iconscout/react-unicons";

import "../../App.css";
import "./BigSearchComponent.css";

const BigSearchComponent = (props) => {
   return (
      <div className="big__search-container">
         <div className="big__search">
            <div className="big__search-input-container">
               <Unicons.UilSearch className="big__search-icon" />
               <input
                  type="text"
                  className="big__search-input"
                  value={props.query}
                  onChange={(e) => {
                     props.setQuery(e.target.value);
                     props.search(e.target.value);
                  }}
                  placeholder="Search.."
               />
               <Unicons.UilTimes
                  size="18"
                  className={
                     !props.query
                        ? "big__search-clear-icon"
                        : "big__search-clear-icon clear__icon-active"
                  }
                  onClick={() => {
                     props.setQuery("");
                  }}
               />
            </div>
         </div>
      </div>
   );
};

export default BigSearchComponent;
