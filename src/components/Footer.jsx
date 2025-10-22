import React from "react";
import logo1 from "../assets/logos/Vectorium logo (2).svg";
import logo2 from "../assets/logos/Vectorium logo (4).svg";

export default function Footer() {
  return (
    <footer className="py-10 border-t border-gray-800 mt-16 text-center">
      <div className="flex justify-center items-center gap-8 mb-4">
        <img src={logo1} alt="Vectorium" className="h-10 opacity-80" />
        <img src={logo2} alt="BenediXit OÜ" className="h-10 opacity-80" />
      </div>
      <p className="text-sm text-gray-400 max-w-3xl mx-auto px-6">
        This project is operated by BenediXit OÜ under the Vectorium Group. VECT
        • AI tokens are utility-based digital assets intended for innovation
        support and community participation. Not available to residents of the
        U.S., Canada, or restricted jurisdictions.
      </p>
    </footer>
  );
}
