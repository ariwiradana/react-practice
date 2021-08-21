import React, { useEffect } from "react";
import NavbarComponent from "../../components/Navbar/NavbarComponent";
import "../../App.css";
import "./ProductsContainer.css";

const ProductsContainer = () => {
   useEffect(() => {
      document.title = "Products";
   });

   return (
      <div className="container">
         <NavbarComponent />
      </div>
   );
};

export default ProductsContainer;
