import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Vision from "./components/Vision";
import Tokenomics from "./components/Tokenomics";
import Documents from "./components/Documents";
import BuyWidget from "./components/BuyWidget";
import Roadmap from "./components/Roadmap";
import Team from "./components/Team";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-vectBlack text-white antialiased">
      <Header />
      <main className="max-w-7xl mx-auto px-6">
        <About />
        <Vision />
        <Tokenomics />
        <Documents />
         <Hero />
        <BuyWidget />
        <Roadmap />
        <Team />
      </main>
      <Footer />
    </div>
  );
}
