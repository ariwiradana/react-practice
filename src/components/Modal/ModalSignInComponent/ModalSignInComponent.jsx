import React, { useState } from "react";
import * as Unicons from "@iconscout/react-unicons";
import "../../../App.css";
import "../ModalComponent.css";

const ModalSignInComponent = (props) => {
   const [togglePassword, setTogglePassword] = useState(true);

   return (
      <form action="">
         <div className="form__group">
            <Unicons.UilUser className="form__icon" />
            <input
               onChange={(e) => props.handleInputSignInForm(e)}
               type="text"
               autoComplete="off"
               name="username"
               className="form__input form__block"
               placeholder="Username or email"
            />
         </div>
         <div className="form__group form__password">
            <Unicons.UilLock className="form__icon" />
            <input
               type={togglePassword ? "password" : "text"}
               className="form__input form__block"
               autoComplete="off"
               name="password"
               placeholder="Password"
               onChange={(e) => props.handleInputSignInForm(e)}
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
      </form>
   );
};

export default ModalSignInComponent;
