import React from "react";

const members = [
  { name: "Enea Benedetto", role: "Founder & Vision Lead" },
  { name: "Stefano Della Valle", role: "Lead Blockchain & AI Engineer" },
  { name: "Ivan Sokolov", role: "Security & Infrastructure" },
  { name: "Abdul Rafay", role: "Core Protocol Engineer" },
  { name: "Raffaele Giove", role: "AI & Automation" },
];

export default function Team() {
  return (
    <section id="team" className="py-16">
      <h3 className="text-2xl font-semibold">Team</h3>
      <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {members.map(m => (
          <div key={m.name} className="p-4 rounded-xl border border-gray-800 bg-gray-900/30">
            <div className="h-28 bg-gradient-to-r from-gray-800 to-gray-700 rounded flex items-center justify-center text-2xl">
              {m.name.split(" ").map(n => n[0]).slice(0,2).join("")}
            </div>
            <div className="mt-3">
              <div className="font-semibold">{m.name}</div>
              <div className="text-sm text-gray-300">{m.role}</div>
              <div className="mt-2 flex gap-2">
                <a href="/" className="text-sm text-gray-400">Telegram</a>
                <a href="/" className="text-sm text-gray-400">LinkedIn</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
