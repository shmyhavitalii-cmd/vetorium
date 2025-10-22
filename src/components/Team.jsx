import React from "react";
import team1 from "../assets/card.jpg";
import team2 from "../assets/card.jpg";
import team3 from "../assets/card.jpg";
import team4 from "../assets/card.jpg";
import team5 from "../assets/card.jpg";

const teamMembers = [
  { name: "Enea Benedetto", role: "Founder & Vision Lead", img: team1 },
  { name: "Stefano Della Valle", role: "Lead Blockchain & AI Engineer", img: team2 },
  { name: "Ivan Sokolov", role: "Security & Infrastructure", img: team3 },
  { name: "Abdul Rafay", role: "Core Protocol Engineer", img: team4 },
  { name: "Raffaele Giove", role: "AI & Automation", img: team5 },
];

export default function Team() {
  return (
    <section id="team" className="py-20 bg-black text-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold mb-12 text-[#D4AF37]">
          Meet the Team
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-center">
          {teamMembers.map((member, i) => (
            <div
              key={i}
              className="team-card bg-[#111] border border-[#333] rounded-xl p-4 text-center hover:shadow-lg hover:shadow-[#d4af3725] hover:border-[#D4AF37] transition-all duration-300 ease-in-out"
            >
              <div className="w-24 h-24 mx-auto mb-3 overflow-hidden rounded-full border border-[#444]">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-lg font-semibold text-[#D4AF37] truncate">
                {member.name}
              </h4>
              <p className="text-sm text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
