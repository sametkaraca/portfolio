import React from "react";
import HomeHeader from "./HomeHeader";
import HomeProject from "./HomeProject";
import HomeServices from "./HomeServices";
import HomeComment from "./HomeComment";



const Home = () => {

  return (
    <div>
      <HomeHeader />
      <HomeProject/>
      <HomeServices />
      <HomeComment />
    </div>
  );
};

export default Home;
