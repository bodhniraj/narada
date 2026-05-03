import { useState } from "react";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import Hero from "./components/sections/Hero";
import Proof from "./components/sections/Proof";
import Faq from "./components/sections/Faq";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Proof />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
