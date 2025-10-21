import React from "react";

export default function Roadmap() {
  const items = [
    { quarter: "Q4 2025", title: "Private Sale", note: "Private allocation & partner onboarding" },
    { quarter: "Q1 2026", title: "Public Launch", note: "Listing & liquidity" },
    { quarter: "Q2 2026", title: "Mainnet features", note: "IntelliJAM / IntelliGEM integrations" },
  ];

  return (
    <section id="roadmap" className="py-16">
      <h3 className="text-2xl font-semibold">Roadmap</h3>
      <div className="mt-6 space-y-4">
        {items.map(i => (
          <div key={i.quarter} className="p-4 rounded-xl border border-gray-800 bg-gray-900/40">
            <div className="flex justify-between">
              <div className="font-semibold">{i.title}</div>
              <div className="text-sm text-gray-400">{i.quarter}</div>
            </div>
            <p className="mt-2 text-gray-300">{i.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
