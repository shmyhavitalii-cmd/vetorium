import React from "react";

const cards = [
  {
    title: "AI-Powered Decentralization",
    text: "Bridging human and machine intelligence with decentralized governance and on-chain AI models.",
  },
  {
    title: "Real-World Tokenization",
    text: "Connecting AI outputs with verifiable blockchain assets and data streams.",
  },
  {
    title: "Ethical & Sustainable",
    text: "European-led innovation designed for trust, privacy, and long-term scalability.",
  },
];

export default function Vision() {
  return (
    <section id="vision" className="py-16">
      <h3 className="text-2xl font-semibold">Why It Matters</h3>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {cards.map((c) => (
          <div key={c.title} className="p-6 rounded-xl bg-gray-900/40 border border-gray-800">
            <h4 className="font-semibold text-lg">{c.title}</h4>
            <p className="mt-3 text-gray-300">{c.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
