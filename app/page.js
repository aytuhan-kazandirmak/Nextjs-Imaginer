"use client";
import HomePageContainer from "@/containers/home-page-container";
import React from "react";
import { HomePageProvider } from "@/containers/home-page-container/useHomePage";
const HomePage = () => {
  return (
    <HomePageProvider>
      <HomePageContainer />
    </HomePageProvider>
  );
};

export default HomePage;
