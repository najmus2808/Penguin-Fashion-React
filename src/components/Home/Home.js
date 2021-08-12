import React from "react";
import Header from "../Header/Header";
import NavbarHeader from "../Navbar/Navbar";
import CasualShoes from "../CasualShoes/CasualShoes";
import FormalShoes from "../FormalShoes/FormalShoes";
import About from "../About/About";

function Home() {
  return (
    <div>
      <NavbarHeader />
      <Header />
      <CasualShoes />
      <FormalShoes />
      <About />
      
    </div>
  );
}

export default Home;
