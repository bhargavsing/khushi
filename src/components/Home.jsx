import React from "react"; 
import Work from "../components/hero/Work";
import Stripes from "../components/stripes/Stripes"; 
import Products from "../components/products/Products";
import Marquees from "../components/marquees/Marquees";
import Cards from "../components/cards/Cards";
import Footer from "../components/footer/Footer";

function Home() {
  return (
    <div>
      <Work />
      <Stripes />
      <Products />
      <Marquees />
      <Cards />
      <Footer />
    </div>
  );
}

export default Home;
