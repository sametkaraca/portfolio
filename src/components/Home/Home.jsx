import React from "react";
import { HomeHeader } from "./HomeHeader";
import { HomeProject } from "./HomeProject";
import { HomeServices } from "./HomeServices";
import { HomeComment } from "./HomeComment";

export const Home = () => {
  return (
    <>
      <HomeHeader />
      <HomeProject />
      <HomeServices />
      <HomeComment />
    </>
  );
};
