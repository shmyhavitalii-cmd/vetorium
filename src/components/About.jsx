import React from "react";
import { ExternalLink } from "lucide-react";
import aboutImg from "../assets/logos/image.jpg";

export default function About() {
  return (
    <section id="about" className="py-24 bg-black text-gray-100 border-t border-[#222]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT IMAGE — linked externally */}
        <div className="flex justify-center">
          <a
            href="https://test.vectorium.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#111] p-6 rounded-2xl border border-[#333] shadow-lg hover:border-[#D4AF37] hover:shadow-[#d4af3720] transition-all duration-300 inline-block"
          >
            <img
              src={aboutImg}
              alt="VECT.AI"
              className="w-48 mx-auto opacity-90 hover:scale-105 transition-transform duration-300"
            />
          </a>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-3xl font-semibold mb-6 text-[#D4AF37]">
            About VECT • AI
          </h2>
          <p className="text-gray-300 mb-5 leading-relaxed">
            <strong className="text-[#D4AF37]">VECT • AI</strong> is the evolution of the 
            <strong className="text-white"> Vectorium ecosystem</strong> — a decentralized 
            intelligence protocol integrating blockchain, AI, and tokenized data streams.
          </p>
          <p className="text-gray-400 mb-6 leading-relaxed">
            It powers the <strong className="text-[#D4AF37]">IntelliJAM</strong> and 
            <strong className="text-[#D4AF37]"> IntelliGEM</strong> systems, forming the backbone of the 
            <strong className="text-white"> Vectorium Innovation Network</strong>. This synergy brings 
            intelligence, transparency, and sustainability into digital asset management.
          </p>

          {/* LINK BUTTONS — now visibly “external” */}
          <div className="flex gap-4 flex-wrap mt-4 justify-start">
            <a
              href="https://vectorium.co"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#111] border border-[#333] rounded-lg px-5 py-2 text-[#D4AF37] font-semibold hover:border-[#D4AF37] hover:text-[#E6C76E] transition"
            >
              Vectorium Holding
              <ExternalLink className="w-4 h-4 text-[#D4AF37] group-hover:text-[#E6C76E]" />
            </a>

            <a
              href="https://benedix.it"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#111] border border-[#333] rounded-lg px-5 py-2 text-[#D4AF37] font-semibold hover:border-[#D4AF37] hover:text-[#E6C76E] transition"
            >
              BenediXit OÜ
              <ExternalLink className="w-4 h-4 text-[#D4AF37] group-hover:text-[#E6C76E]" />
            </a>

            <a
              href="https://test.vectorium.co"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#111] border border-[#333] rounded-lg px-5 py-2 text-[#D4AF37] font-semibold hover:border-[#D4AF37] hover:text-[#E6C76E] transition"
            >
              VECT • AI Department
              <ExternalLink className="w-4 h-4 text-[#D4AF37] group-hover:text-[#E6C76E]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
