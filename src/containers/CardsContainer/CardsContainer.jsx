import React, { useEffect } from "react";
import NavbarComponent from "../../components/Navbar/NavbarComponent";
import "../../App.css";
import "./CardsContainer.css";

const CardsContainer = () => {
   useEffect(() => {
      document.title = "Cards";
   });

   return (
      <div className="container">
         <NavbarComponent />
      </div>
   );
};

export default CardsContainer;
