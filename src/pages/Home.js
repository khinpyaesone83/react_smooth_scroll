import React, { useState } from "react";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import InfoSection from "./../components/InfoSection/InfoSection";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "./../components/InfoSection/Data";

import ImageOne from "../images/svg-2.svg";
import ImageTwo from "../images/svg-1.svg";
import ImageThree from "../images/svg-3.svg";
import Services from "../components/Services/Services";
import Footer from "../components/Footer/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <InfoSection data={homeObjOne} img={ImageOne} />
      <InfoSection data={homeObjTwo} img={ImageTwo} />
      <InfoSection data={homeObjThree} img={ImageThree} />
      <Services />
      <Footer />
    </>
  );
};

export default Home;
