import React, { useState } from "react";

import BigSearchComponent from "../../components/BigSearch/BigSearchCoponent";
import NavbarComponent from "../../components/Navbar/NavbarComponent";
import * as Unicons from "@iconscout/react-unicons";

import "../../App.css";
import "./HomeContainer.css";
import CardComponent from "../../components/Card/CardComponent";

const HomeContainer = () => {
   const [data, setData] = useState([]);
   const [popular, setPopular] = useState("");
   const [loading, setLoading] = useState(false);

   const relatedItems = [
      "web",
      "laptop",
      "temple",
      "bali",
      "restaurant",
      "cars",
   ];

   const handleGetUser = (query) => {
      setLoading(true);
      fetch(
         `https://api.unsplash.com/search/photos/?client_id=g-bonVsGp-frinKsJJ5x0nT84TtlItZ7ULw8v8vljJY&query=${query}`,
         {}
      )
         .then((result) => result.json())
         .then((response) => handleResultAPI(response.results));
   };

   const handleResultAPI = (data) => {
      document.querySelector(".card__container").innerHTML = "";
      setTimeout(() => {
         setLoading(false);
         setData((state) => [...state, data]);
      }, 1000);
   };

   return (
      <div className="container">
         <NavbarComponent />
         <BigSearchComponent
            search={handleGetUser}
            popular={popular}
            setPopular={setPopular}
         />
         <div className="content">
            <div className="search__query">Website</div>
            <p className="search__caption">
               Browse 10,000+ website work, designs, illustrations, and graphic
               elements
            </p>
            <div className="search__related">
               <div className="related">Popular search :</div>
               <div className="query__related">
                  {relatedItems.map((item, i) => {
                     return (
                        <a
                           key={i}
                           onClick={(e) => {
                              handleGetUser(e.target.innerText);
                              setPopular(e.target.innerText);
                           }}
                        >
                           {item}
                        </a>
                     );
                  })}
               </div>
            </div>
            <Unicons.UilSpinnerAlt
               size="30"
               className={loading ? "loading loading__active" : "loading"}
            />
            <div className="card__container">
               {data.map((item, i) => {
                  return <CardComponent key={i} data={item} />;
               })}
            </div>
         </div>
      </div>
   );
};

export default HomeContainer;
