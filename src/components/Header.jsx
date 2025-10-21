import React from "react";
import logo1 from "../assets/logos/photo_2025-10-21_03-21-56.jpg";
import { WHITEPAPER_URL } from "../config/constants";

export default function Header() {
  return (
    <header className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-black/60" />
      <div className="max-w-5xl">
        <img src={logo1} alt="Vectorium coin" className="w-48 mx-auto mb-6 rounded-full shadow-2xl" />
        <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neonCyan to-neonViolet glow">
          VECT • AI
        </h1>
        <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
          Empowering the Next Era of Intelligent Assets — Built by Vectorium.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a href="#buy" className="px-6 py-3 rounded-xl bg-neonCyan text-black font-semibold shadow hover:scale-105 transition">
            Buy Tokens
          </a>
          <a href={WHITEPAPER_URL} className="px-6 py-3 rounded-xl border border-gray-600 hover:bg-gray-700 transition">
            Read Whitepaper
          </a>
          <a href="#community" className="px-6 py-3 rounded-xl border border-transparent hover:border-gray-600 transition">
            Join Community
          </a>
        </div>
      </div>
    </header>
  );
}
