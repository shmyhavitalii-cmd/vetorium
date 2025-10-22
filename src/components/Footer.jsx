import React from "react";
import logo from "../assets/logos/Vectorium logo (3).svg";

export default function Footer() {
  return (
    <footer className="bg-[#0A0E1A] text-gray-300 py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12 items-start">
        {/* Logo + Description */}
        <div>
          <img
            src={logo}
            alt="VECT AI"
            className="h-16 md:h-20 mb-6 brightness-110" // increased height
          />
          <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
            Operated by BenediXit OÜ under the Vectorium Group. VECT • AI tokens
            are utility-based assets for innovation support and community
            participation.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-lg">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-[#00AEEF]">About</a></li>
            <li><a href="#vision" className="hover:text-[#00AEEF]">Vision</a></li>
            <li><a href="#team" className="hover:text-[#00AEEF]">Team</a></li>
            <li><a href="#docs" className="hover:text-[#00AEEF]">Documents</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-lg">Community</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[#00AEEF]">Telegram</a></li>
            <li><a href="#" className="hover:text-[#00AEEF]">Discord</a></li>
            <li><a href="#" className="hover:text-[#00AEEF]">X (Twitter)</a></li>
          </ul>
        </div>
      </div>

      {/* Divider + Copyright */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Vectorium Group — All rights reserved.
      </div>
    </footer>
  );
}
