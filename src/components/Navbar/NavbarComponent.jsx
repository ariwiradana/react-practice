import React, { useEffect, useState } from "react";
import * as Unicons from "@iconscout/react-unicons";
import { Link } from "react-router-dom";

import "../../App.css";
import "./NavbarComponent.css";
import "../Modal/ModalComponent";

import { navItems } from "./NavbarItems";
import ModalComponent from "../Modal/ModalComponent";
import MobileNavbarComponent from "../MobileNavbar/MobileNavbarComponent";

const NavbarComponent = () => {
   useEffect(() => {
      sessionStorage.getItem("login") ? setlogin(true) : setlogin(false);
   });

   const [login, setlogin] = useState(false);
   const [modal, setModal] = useState(false);
   const [modalFor, setModalFor] = useState("");
   const [showMobileNav, setShowMobileNav] = useState(false);

   return (
      <div className="nav">
         <MobileNavbarComponent
            showMobileNav={showMobileNav}
            setShowMobileNav={setShowMobileNav}
         />
         <ModalComponent
            modalFor={modalFor}
            modal={modal}
            setModal={setModal}
         />
         <div className="nav__logo">
            <Unicons.UilCube className="nav__logo-icon" />
            <Link className="nav__logo-title" to="/">
               react-app
            </Link>
         </div>
         <div className="nav__link">
            {navItems.map((item, i) => {
               return (
                  <Link className="nav__item" to={item.path} key={i}>
                     <div className="nav__title">{item.title}</div>
                  </Link>
               );
            })}
         </div>
         <div className="nav__btns">
            {!login ? (
               <div className="nav__signs">
                  <button
                     className="btn__nav"
                     onClick={(e) => {
                        setModalFor(e.target.innerText);
                        setModal(true);
                     }}
                  >
                     Sign-in
                  </button>
                  <button
                     className="btn__nav"
                     onClick={(e) => {
                        setModalFor(e.target.innerText);
                        setModal(true);
                     }}
                  >
                     Sign-up
                  </button>
               </div>
            ) : (
               ""
            )}

            <div className="nav__img">
               <img src="https://source.unsplash.com/weekly?person" alt="" />
            </div>

            <Unicons.UilBars
               onClick={() => setShowMobileNav(!showMobileNav)}
               className="nav__bars"
            />
         </div>
      </div>
   );
};

export default NavbarComponent;
