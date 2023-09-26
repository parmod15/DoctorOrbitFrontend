import React from "react";
import ReactDom from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Body from "./components/Body";
import ErrorElement from "./components/ErrorElement";
import DoctorDetail from "./components/DoctorDetail";
import Footer from "./components/Footer";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Body />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "",
        element: <HeroSection />,
      },
      {
        path: "book-now",
        element: <Body />,
      },
    ],
  },
  {
    path: "/doctor/:id",
    element: <DoctorDetail />,
  },
]);

const root = ReactDom.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={appRouter} />);
