import React from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import CasualShoes from "../CasualShoes/CasualShoes";
import FormalShoes from "../FormalShoes/FormalShoes";
import About from "../About/About";

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <CasualShoes />
      <FormalShoes />
      <About />
    </div>
  );
}

export default Home;
