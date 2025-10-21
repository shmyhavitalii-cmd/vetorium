import React from "react";
import { WHITEPAPER_URL, TECHNICAL_PAPER_URL, PRIVATE_SALE_URL, TERM_SHEET_URL } from "../config/constants";

const docs = [
  { icon: "📘", title: "Whitepaper v0.3", href: WHITEPAPER_URL },
  { icon: "⚙️", title: "Technical Paper", href: TECHNICAL_PAPER_URL },
  { icon: "📄", title: "Private Sale Agreement", href: PRIVATE_SALE_URL },
  { icon: "💠", title: "Term Sheet", href: TERM_SHEET_URL },
];

export default function Documents() {
  return (
    <section id="documents" className="py-16">
      <h3 className="text-2xl font-semibold">Official Documents</h3>
      <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        {docs.map((d) => (
          <a key={d.title} href={d.href} className="p-4 rounded-xl border border-gray-800 hover:bg-gray-900/40 transition">
            <div className="text-3xl">{d.icon}</div>
            <div className="mt-2 font-medium">{d.title}</div>
          </a>
        ))}
      </div>
      <div className="mt-6 text-sm text-gray-400">
        Token Smart Contract: <a className="text-gray-200" href={`https://solscan.io/token/${encodeURIComponent("J7gr5uPExeRmTc6GdVNyXj4zmYdXmYLYFC5TkkDngm4x")}`} target="_blank" rel="noreferrer">View on Solscan</a>
      </div>
    </section>
  );
}
