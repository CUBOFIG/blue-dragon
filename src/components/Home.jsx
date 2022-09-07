import React, { useState } from "react";
import { InfoNavbar, InfoHeader, InfoAbout, InfoPortfolio } from "./data";
import About from "./about/About";
import Blank from "./blank/Blank";
import Header from "./header/Header";
import Navbar from "./navbar/Navbar";
import Showcase from "./showcase/Showcase";
import Portfolio from "./portfolio/Portfolio.jsx";
import ScrollButton from "./scrollbutton/ScrollButton.jsx";
import SideBar from "./sidebar/SideBar";

const Home = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  const show = () => {
    setSidebarIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <Navbar {...InfoNavbar} isOpen={show} />
      <SideBar toggle={sidebarIsOpen} isOpen={show} />
      <Header {...InfoHeader} />
      <About {...InfoAbout} />
      <Showcase />
      <Blank />
      <Portfolio {...InfoPortfolio} />
      <Blank />
      <ScrollButton />
    </>
  );
};

export default Home;
