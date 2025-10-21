import React from "react";
import logo2 from "../assets/logos/photo_2025-10-21_03-21-33.jpg";
import { CONTRACT_ADDRESS } from "../config/constants";

export default function About() {
  return (
    <section id="about" className="py-16">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-semibold">About VECT • AI</h2>
          <p className="mt-4 text-gray-300">
            VECT • AI is the evolution of Vectorium’s ecosystem — a decentralized intelligence protocol integrating blockchain,
            AI, and tokenized data streams. It powers the IntelliJAM and IntelliGEM systems, forming the backbone of the Vectorium Innovation Network.
          </p>

          <ul className="mt-6 space-y-2 text-gray-300">
            <li>• Built by Vectorium Holding & BenediXit OÜ</li>
            <li>• Drives tokenized real-world data and on-chain intelligence</li>
            <li>• Contract: <span className="text-sm text-gray-200">{CONTRACT_ADDRESS}</span></li>
          </ul>
        </div>

        <div className="flex justify-center">
          <img src={logo2} alt="Vect coin stack" className="w-64 rounded-lg shadow-xl" />
        </div>
      </div>
    </section>
  );
}
