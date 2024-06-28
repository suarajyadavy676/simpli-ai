import React from "react";
import HomeBody from "./HomeBody";
import {  Route, Routes } from "react-router-dom";
import SimpliAssist from "../routes/SimpliAssist";
import BookDemo from "../routes/BookDemo";
import AboutUs from "../routes/AboutUs";
import ScrollToTop from "./ScrollToTop";
import ScrollToTopButton from "./ScrollToTopButton";

function AllRoutes() {
  return (
    <div className="relative">     
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomeBody />} />
          <Route path="/simpliAssist" element={<SimpliAssist />} />
          <Route path="/BookDemo" element={<BookDemo />} />
          <Route path="/aboutUs" element={<AboutUs />} />
        </Routes>
        <ScrollToTopButton/>
    </div>
  );
}

export default AllRoutes;
