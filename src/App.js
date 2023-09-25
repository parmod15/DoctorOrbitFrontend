import React from "react";
import ReactDom from "react-dom/client";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

const AppLayout = () => {
  return (
    <>
      <Header />
      <HeroSection />
    </>
  );
};

const root = ReactDom.createRoot(document.querySelector("#root"));
root.render(<AppLayout />);
