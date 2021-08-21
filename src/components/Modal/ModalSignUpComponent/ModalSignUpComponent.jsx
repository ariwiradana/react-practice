import React, { useState } from "react";
import * as Unicons from "@iconscout/react-unicons";
import "../../../App.css";
import "../ModalComponent.css";

const ModalSignUpComponent = (props) => {
   const [togglePassword, setTogglePassword] = useState(true);
   const [toggleRepeatPassword, setToggleRepeatPassword] = useState(true);

   return (
      <form action="">
         <div className="form__group">
            <Unicons.UilEnvelope className="form__icon" />
            <input
               type="text"
               autoComplete="off"
               onChange={(e) => props.handleInputSignUpForm(e)}
               name="email"
               className="form__input form__block"
               placeholder="Email"
            />
         </div>
         <div className="form__group">
            <Unicons.UilUser className="form__icon" />
            <input
               type="text"
               onChange={(e) => props.handleInputSignUpForm(e)}
               name="username"
               autoComplete="off"
               className="form__input form__block"
               placeholder="Username"
            />
         </div>
         <div className="form__group form__password">
            <Unicons.UilLock className="form__icon" />
            <input
               onChange={(e) => props.handleInputSignUpForm(e)}
               name="password"
               autoComplete="off"
               type={togglePassword ? "password" : "text"}
               className="form__input form__block"
               placeholder="Password"
            />
            {togglePassword ? (
               <Unicons.UilEye
                  className="form__icon form__icon-password"
                  onClick={() => setTogglePassword(!togglePassword)}
               />
            ) : (
               <Unicons.UilEyeSlash
                  className="form__icon form__icon-password"
                  onClick={() => setTogglePassword(!togglePassword)}
               />
            )}
         </div>

         <div className="form__group form__password">
            <Unicons.UilLock className="form__icon" />
            <input
               type={toggleRepeatPassword ? "password" : "text"}
               onChange={(e) => props.handleInputSignUpForm(e)}
               name="repeatPassword"
               autoComplete="off"
               className="form__input form__block"
               placeholder="Repeat Password"
            />
            {toggleRepeatPassword ? (
               <Unicons.UilEye
                  className="form__icon form__icon-password"
                  onClick={() => setToggleRepeatPassword(!toggleRepeatPassword)}
               />
            ) : (
               <Unicons.UilEyeSlash
                  className="form__icon form__icon-password"
                  onClick={(e) =>
                     setToggleRepeatPassword(!toggleRepeatPassword)
                  }
               />
            )}
         </div>
      </form>
   );
};

export default ModalSignUpComponent;
