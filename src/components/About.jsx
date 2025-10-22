import React from "react";
import aboutImg from "../assets/logos/image.jpg";

export default function About() {
  return (
    <section id="about" className="py-24 bg-black text-gray-100 border-t border-[#222]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT IMAGE */}
        <div className="flex justify-center">
          <div className="bg-[#111] p-6 rounded-2xl border border-[#333] shadow-lg hover:shadow-[#d4af3720] transition-all duration-300">
            <img
              src={aboutImg}
              alt="About VECT.AI"
              className="w-48 mx-auto opacity-90"
            />
          </div>
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

          <div className="flex gap-4 flex-wrap mt-4">
            <div className="bg-[#111] border border-[#333] rounded-lg px-5 py-2 text-[#D4AF37] font-semibold">
              Vectorium Holding
            </div>
            <div className="bg-[#111] border border-[#333] rounded-lg px-5 py-2 text-[#D4AF37] font-semibold">
              BenediXit OÜ
            </div>
            <div className="bg-[#111] border border-[#333] rounded-lg px-5 py-2 text-[#D4AF37] font-semibold">
              VECT • AI Department
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
