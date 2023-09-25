import React from "react";
import ReactDom from "react-dom/client";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Body from "./components/Body";

const AppLayout = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Body />
    </>
  );
};

const root = ReactDom.createRoot(document.querySelector("#root"));
root.render(<AppLayout />);
