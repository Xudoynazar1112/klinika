import React from "react";
import Navbar from "./Header";
import Footer from "./Footer";
import { ScrollRestoration } from "react-router-dom";

const MainWrapper = (routes) => {
  return routes.map((route) => ({
    ...route,
    element: (
      <div className="flex flex-col min-h-screen w-[100%]">
        <ScrollRestoration />
        <Navbar />
        <main className="flex-[100%] flex flex-col items-center md:mt-28 mt-20">
          {route.element}
        </main>
        <Footer />
      </div>
    ),
  }));
};

export default MainWrapper;
