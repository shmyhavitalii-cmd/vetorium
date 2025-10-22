import React, { useState } from "react";
import logo from "../assets/logos/logo.svg";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/95 backdrop-blur-md border-b border-[#222] shadow-md">
      <nav className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
        {/* LOGO + BRAND */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Vectorium"
            className="h-14 w-auto transition-transform duration-300 hover:scale-105"
          />
          
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-7 text-[15px] font-medium text-gray-200">
          <a href="#about" className="hover:text-[#D4AF37]">About</a>
          <a href="#vision" className="hover:text-[#D4AF37]">Vision</a>
          <a href="#team" className="hover:text-[#D4AF37]">Team</a>
          <a href="#docs" className="hover:text-[#D4AF37]">Documents</a>
          <a
            href="#buy"
            className="px-5 py-1.5 rounded-md bg-[#D4AF37] text-black font-semibold hover:bg-[#E6C76E]"
          >
            Buy Tokens
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-center gap-1"
        >
          <span className="w-6 h-[2px] bg-[#D4AF37]"></span>
          <span className="w-6 h-[2px] bg-[#D4AF37]"></span>
          <span className="w-6 h-[2px] bg-[#D4AF37]"></span>
        </button>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-black text-gray-200 border-t border-[#222] shadow-lg">
          <div className="flex flex-col items-center py-4 space-y-3 text-base font-medium">
            <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-[#D4AF37]">About</a>
            <a href="#vision" onClick={() => setMenuOpen(false)} className="hover:text-[#D4AF37]">Vision</a>
            <a href="#team" onClick={() => setMenuOpen(false)} className="hover:text-[#D4AF37]">Team</a>
            <a href="#docs" onClick={() => setMenuOpen(false)} className="hover:text-[#D4AF37]">Documents</a>
            <a
              href="#buy"
              onClick={() => setMenuOpen(false)}
              className="mt-2 px-6 py-2 rounded-md bg-[#D4AF37] text-black font-semibold hover:bg-[#E6C76E]"
            >
              Buy Tokens
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
