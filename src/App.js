import React from "react";
import ReactDom from "react-dom/client";

import Header from "./components/Header";

const AppLayout = () => {
  return (
    <>
      <Header />
    </>
  );
};

const root = ReactDom.createRoot(document.querySelector("#root"));
root.render(<AppLayout />);
