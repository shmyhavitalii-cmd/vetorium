import React from "react";
import heroBg from "../assets/bg-gold.jpg"; // optional background image

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center text-gray-100 overflow-hidden"
    >
      {/* Background Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0,0,0,0.85)",
        }}
      ></div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/95"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="text-[#D4AF37]">VECT • AI</span>{" "}
          <span className="text-gray-100">— The Intelligent Asset Manager</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
          Empowering the next era of decentralized intelligence, where{" "}
          <span className="text-[#D4AF37] font-medium">AI</span> meets{" "}
          <span className="text-[#D4AF37] font-medium">Blockchain</span> to
          create verifiable, ethical, and sustainable asset ecosystems.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#buy"
            className="px-6 py-3 bg-[#D4AF37] text-black font-semibold rounded-md hover:bg-[#E6C76E] transition"
          >
            Buy Tokens
          </a>
          <a
            href="/documents/whitepaper.pdf"
            className="px-6 py-3 border border-[#D4AF37] text-[#D4AF37] rounded-md font-semibold hover:bg-[#D4AF37] hover:text-black transition"
          >
            Read Whitepaper
          </a>
        </div>
      </div>

      {/* Subtle floating glow effect */}
      <div className="absolute w-96 h-96 bg-[#D4AF37]/10 blur-3xl rounded-full top-32 left-1/2 -translate-x-1/2"></div>
    </section>
  );
}
