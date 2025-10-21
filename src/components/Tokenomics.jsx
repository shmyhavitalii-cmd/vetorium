import React from "react";

export default function Tokenomics() {
  return (
    <section id="tokenomics" className="py-16">
      <h3 className="text-2xl font-semibold">Tokenomics Snapshot</h3>
      <div className="mt-6 grid md:grid-cols-2 gap-6 items-center">
        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
          <table className="w-full text-left">
            <tbody>
              <tr>
                <th className="py-2">Private Sale Price</th>
                <td className="py-2">$0.05 USD</td>
              </tr>
              <tr>
                <th className="py-2">Listing Target</th>
                <td className="py-2">$0.20 USD</td>
              </tr>
              <tr>
                <th className="py-2">Accepted</th>
                <td className="py-2">USDT / USDC / SOL / BNB</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <div className="rounded-xl p-6 bg-gradient-to-r from-[#031129] to-[#00121a] border border-gray-800">
            <h4 className="font-semibold">Allocation (example)</h4>
            <div className="mt-4 text-gray-300">
              <p>• Private Sale — 20%</p>
              <p>• Public — 30%</p>
              <p>• Team & Advisors — 15%</p>
              <p>• Reserve & Ecosystem — 35%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
