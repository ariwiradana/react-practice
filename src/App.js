import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import CardsContainer from "./containers/CardsContainer/CardsContainer";
import HomeContainer from "./containers/Home/HomeContainer";
import ProductsContainer from "./containers/ProductsContainers/ProductsContainer";

function App() {
   return (
      <Router>
         <Route path="/" exact component={HomeContainer} />
         <Route path="/cards" component={CardsContainer} />
         <Route path="/app" component={CardsContainer} />
         <Route path="/products" component={ProductsContainer} />
      </Router>
   );
}

export default App;
