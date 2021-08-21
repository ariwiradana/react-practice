import React, { useState, useEffect, Fragment } from "react";
import * as Unicons from "@iconscout/react-unicons";

import BigSearchComponent from "../../components/BigSearch/BigSearchCoponent";
import NavbarComponent from "../../components/Navbar/NavbarComponent";
import CardComponent from "../../components/Card/CardComponent";
import MobileNavbarComponent from "../../components/MobileNavbar/MobileNavbarComponent";

import "../../App.css";
import "./HomeContainer.css";

const HomeContainer = () => {
   useEffect(() => {
      document.title = "Home";
   });

   const [data, setData] = useState([]);
   const [query, setQuery] = useState("");
   const [loading, setLoading] = useState(false);

   const relatedItems = [
      "person",
      "human",
      "animal",
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
      <Fragment>
         <NavbarComponent />
         <BigSearchComponent
            search={handleGetUser}
            query={query}
            setQuery={setQuery}
         />
         <div className="content">
            <div className="search__query">{query}</div>
            <p className="search__caption">
               Browse 10,000+ website work, designs, illustrations, and graphic
               elements
            </p>
            <div className="search__related">
               <div className="related">Popular search :</div>
               <div className="query__related">
                  {relatedItems.map((item, i) => {
                     return (
                        <div
                           key={i}
                           onClick={(e) => {
                              handleGetUser(e.target.innerText);
                              setQuery(e.target.innerText);
                           }}
                        >
                           {item}
                        </div>
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
      </Fragment>
   );
};

export default HomeContainer;
