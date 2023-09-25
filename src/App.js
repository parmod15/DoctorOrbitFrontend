import React from "react";
import ReactDom from "react-dom/client";

const root = ReactDom.createRoot(document.querySelector("#root"));

root.render(<h1 className="text-4xl text-red-500">Working ...</h1>);
