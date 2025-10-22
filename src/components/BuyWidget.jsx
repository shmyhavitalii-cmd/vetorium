import React from "react";

export default function BuyWidget() {
  return (
    <section id="buy" className="py-20 bg-black text-gray-100">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-start">
        <div className="bg-[#111] p-6 rounded-2xl border border-[#333] shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 text-[#D4AF37]">How to Buy</h3>
          <ol className="list-decimal ml-5 text-gray-300 space-y-2 text-sm">
            <li>Connect your wallet (MetaMask, Phantom, or WalletConnect).</li>
            <li>Select token pair (USDT → VECT.AI).</li>
            <li>Set slippage (3–5%) and confirm the swap.</li>
            <li>Claim vested tokens via Streamflow.finance.</li>
          </ol>
          <div className="flex flex-wrap justify-center gap-3 mt-5">
            <a
              href="https://pancakeswap.finance"
              className="bg-[#D4AF37] text-black px-5 py-2 rounded-md font-semibold hover:bg-[#E6C76E] transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open PancakeSwap
            </a>
            <a
              href="https://jup.ag"
              className="bg-transparent border border-[#D4AF37] text-[#D4AF37] px-5 py-2 rounded-md font-semibold hover:bg-[#D4AF37] hover:text-black transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Jupiter
            </a>
          </div>
        </div>

        <div className="bg-[#111] p-6 rounded-2xl border border-[#333] text-center shadow-lg">
          <h4 className="text-[#D4AF37] mb-3">Quick Swap Preview</h4>
          <div className="bg-[#000] p-5 rounded-lg border border-[#222]">
            <p>From <strong>USDT</strong> → To <strong>VECT.AI</strong></p>
            <p className="text-sm text-gray-400 mt-1">Slippage: 3%</p>
            <button className="mt-4 bg-[#D4AF37] text-black px-6 py-2 rounded-md font-semibold hover:bg-[#E6C76E] transition">
              Proceed to Swap
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
