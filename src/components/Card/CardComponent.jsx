import React, { useState } from "react";
import * as Unicons from "@iconscout/react-unicons";

import "./CardComponent.css";

const CardComponent = (props) => {
   const [overlay, setOverlay] = useState(false);

   let data = props.data[0];
   if (!data) return null;

   console.log(overlay);

   return (
      <div className="card">
         <div
            className="card__img"
            onMouseOver={() => setOverlay(true)}
            onMouseLeave={() => setOverlay(false)}
         >
            <img src={data.urls.regular} alt="" />
            <div
               className={
                  overlay
                     ? "card__overlay card__overlay-active"
                     : "card__overlay"
               }
            >
               <div className="card__overlay-content">
                  <div className="card__overlay-title">
                     {data.alt_description
                        ? data.alt_description.substr(0, 20)
                        : !data.alt_description}
                  </div>
                  <div className="card__overlay-actions">
                     <Unicons.UilFile size="20" className="card__overlay-btn" />
                     <Unicons.UilHeart
                        size="20"
                        className="card__overlay-btn"
                     />
                  </div>
               </div>
            </div>
         </div>
         <div className="card__body">
            <div className="card__item">
               <div className="card__item-img">
                  <img src={data.user.profile_image.small} alt="" />
               </div>
               <div className="card__name">{data.user.name}</div>
            </div>
            <div className="card__item">
               <div className="card__data">
                  <Unicons.UilHeart
                     size="16"
                     color="white"
                     className="card__icon-small"
                  />
                  <span className="card__small">{data.likes}</span>
               </div>
               <div className="card__data">
                  <Unicons.UilEye
                     size="18"
                     color="white"
                     className="card__icon-small"
                  />
                  <span className="card__small">{data.user.total_photos}</span>
               </div>
            </div>
         </div>
      </div>
   );
};

export default CardComponent;
