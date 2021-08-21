import React, { useState } from "react";
import * as Unicons from "@iconscout/react-unicons";
import "../../App.css";
import "./ModalComponent.css";
import ModalSignInComponent from "./ModalSignInComponent/ModalSignInComponent";
import ModalSignUpComponent from "./ModalSignUpComponent/ModalSignUpComponent";

const ModalComponent = (props) => {
   const [formSignIn, setFormSignIn] = useState({
      username: null,
      password: null,
   });

   const [formSignUp, setFormSignUp] = useState({
      email: null,
      username: null,
      password: null,
      repeatPassword: null,
   });

   const handleInputSignInForm = (e) => {
      let form = { ...formSignIn };
      form[e.target.name] = e.target.value;
      setFormSignIn(form);
   };

   const handleInputSignUpForm = (e) => {
      let form = { ...formSignUp };
      form[e.target.name] = e.target.value;
      setFormSignUp(form);
   };

   const handleSubmitSignInForm = () => {
      console.log(formSignIn);
   };

   const handleSubmitSignUpForm = () => {
      console.log(formSignUp);
   };

   return (
      <div
         onClick={(e) =>
            e.target.classList.contains("modal__container") ||
            e.target.classList.contains("modal__close")
               ? props.setModal(false)
               : props.setModal(true)
         }
         className={
            props.modal ? "modal__container modal__show" : "modal__container"
         }
      >
         <div className={`modal ${props.modal ? "modal__active" : ""}`}>
            <div className="modal__header">
               <div className="modal__title">{props.modalFor}</div>
               <Unicons.UilTimes size="20" className="modal__close" />
            </div>
            <div className="modal__body">
               {props.modalFor === "Sign-in" ? (
                  <ModalSignInComponent
                     formSignIn={formSignIn}
                     handleInputSignInForm={handleInputSignInForm}
                  />
               ) : (
                  <ModalSignUpComponent
                     handleInputSignUpForm={handleInputSignUpForm}
                  />
               )}
            </div>
            <div className="card__footer">
               <div
                  className="btn btn__primary"
                  onClick={
                     props.modalFor === "Sign-in"
                        ? handleSubmitSignInForm
                        : handleSubmitSignUpForm
                  }
               >
                  {props.modalFor}
               </div>
            </div>
         </div>
      </div>
   );
};

export default ModalComponent;
