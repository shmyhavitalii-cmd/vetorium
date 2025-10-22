import React from "react";

export default function Tokenomics() {
  const tokenData = [
    { label: "Private Sale Price", value: "$0.05 USD" },
    { label: "Listing Target", value: "$0.20 USD" },
    { label: "Accepted Currencies", value: "USDT / USDC / SOL / BNB" },
    { label: "Total Supply", value: "100,000,000 VECT.AI" },
    { label: "Initial Circulation", value: "10% at TGE" },
  ];

  return (
    <section id="tokenomics" className="py-24 bg-[#0a0a0a] text-gray-100 border-t border-[#222]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl font-semibold mb-10 text-[#D4AF37]">
          Tokenomics Snapshot
        </h2>
        <p className="text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          The <strong className="text-[#D4AF37]">VECT • AI</strong> token is designed for stability, transparency, and
          long-term ecosystem growth — fueling the decentralized intelligence
          network of Vectorium.
        </p>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-[#111] border border-[#333] rounded-lg overflow-hidden">
            <tbody>
              {tokenData.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-[#222] hover:bg-[#151515] transition"
                >
                  <td className="text-left py-3 px-5 font-medium text-[#D4AF37] w-1/2">
                    {item.label}
                  </td>
                  <td className="text-right py-3 px-5 text-gray-300">
                    {item.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Chart Placeholder */}
        <div className="mt-14 bg-[#111] border border-[#333] rounded-xl p-6 text-gray-400 max-w-3xl mx-auto">
          <h4 className="text-[#D4AF37] font-semibold mb-3 text-lg">
            Distribution Overview
          </h4>
          <p className="text-sm">
            • Private Sale – 25%  
            • Public Launch – 20%  
            • Team & Advisors – 15%  
            • Ecosystem Growth – 25%  
            • Treasury & Reserves – 15%
          </p>
          <div className="mt-6 h-2 w-full bg-[#222] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#D4AF37]"
              style={{ width: "25%" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
