import { useState } from "react";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import Hero from "./components/sections/Hero";
import Proof from "./components/sections/Proof";
import Faq from "./components/sections/Faq";
import Cta from "./components/sections/Cta";
import Pricing from "./components/sections/Pricing";
import Features from "./components/sections/Features";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Proof />
      <Features />
      <Pricing />
      <Faq />
      <Cta />
      <Footer />
    </>
  );
}

export default App;
