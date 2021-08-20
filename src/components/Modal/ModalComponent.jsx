import React from "react";
import "./Modal.css";
import * as Unicons from "@iconscout/react-unicons";

const ModalComponent = (props) => {
   const handleCloseModal = (e) => {
      if (e.target.classList.contains("modal__container")) {
         props.setTrigger(false);
      }
   };

   return (
      <div
         onClick={handleCloseModal}
         className={
            props.trigger
               ? "modal__container modal__active"
               : "modal__container"
         }
      >
         <div className="modal">
            <Unicons.UilTimes
               className="modal__close"
               onClick={() => props.setTrigger(false)}
            />
            <div className="modal__row">
               <img
                  src="https://source.unsplash.com/random"
                  alt=""
                  className="modal__img"
               />
               <div className="modal__body">
                  <div className="modal__content">
                     <div className="modal__title">Modal</div>
                     <p className="modal__caption">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quos illo dolores facilis corporis fuga. Quia eos eaque
                        dolorem sed aspernatur!
                     </p>
                  </div>
                  <div className="modal__footer">
                     <button className="btn btn__outline-primary">
                        Register
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ModalComponent;
