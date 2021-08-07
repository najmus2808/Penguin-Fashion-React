import React from "react";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import CasualShoes from "../CasualShoes/CasualShoes";
import FormalShoes from "../FormalShoes/FormalShoes";

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <CasualShoes/>
      <FormalShoes/>
      
    </div>
  );
}

export default Home;
