import React from "react";
import Reviews from "../../../Components/Reviews/Reviews";
import Tools from "../../../Components/Tools/Tools";
import Banner from "../Banner/Banner";
import BusinessSummary from "../BusinessSummary/BusinessSummary";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Tools></Tools>
      <BusinessSummary></BusinessSummary>
      <Reviews></Reviews>
    </>
  );
};

export default Home;
