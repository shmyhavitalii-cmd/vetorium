import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../animations/fadeIn";

export default function BuyWidget() {
  const [connected, setConnected] = useState(false);
  const [account, setAccount] = useState(null);
  const [provider, setProvider] = useState(null);

  useEffect(() => {
    // Detect if already connected
    if (window.ethereum?.selectedAddress) {
      setConnected(true);
      setAccount(window.ethereum.selectedAddress);
      setProvider("metamask");
    }
    if (window.solana?.isPhantom && window.solana.isConnected) {
      setConnected(true);
      setAccount(window.solana.publicKey?.toString());
      setProvider("phantom");
    }
  }, []);

  const connectMetaMask = async () => {
    if (!window.ethereum) return alert("Please install MetaMask.");
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setConnected(true);
      setAccount(accounts[0]);
      setProvider("metamask");
    } catch (err) {
      console.error(err);
    }
  };

  const connectPhantom = async () => {
    if (!window.solana || !window.solana.isPhantom)
      return alert("Please install Phantom wallet.");
    try {
      const resp = await window.solana.connect();
      setConnected(true);
      setAccount(resp.publicKey.toString());
      setProvider("phantom");
    } catch (err) {
      console.error(err);
    }
  };

  const disconnect = async () => {
    if (provider === "phantom" && window.solana?.disconnect) {
      await window.solana.disconnect();
    }
    setConnected(false);
    setAccount(null);
    setProvider(null);
  };

  return (
    <section id="buy" className="py-24 max-w-6xl mx-auto px-6">
      {/* Section Title */}
      <motion.h2
        variants={fadeIn("up", 0)}
        initial="hidden"
        whileInView="show"
        className="text-3xl font-bold mb-10 text-center"
      >
        How to Buy
      </motion.h2>

      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        className="grid md:grid-cols-2 gap-8"
      >
        {/* LEFT CARD - Connect + Steps */}
        <div className="glass-card p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-cyan-400">Connect</h3>
            <p className="text-gray-300 mb-4">
              Connect MetaMask (EVM) or Phantom (Solana). WalletConnect coming
              soon.
            </p>

            {/* Wallet Connect Buttons */}
            <div className="flex flex-wrap gap-3 mb-6">
              {!connected ? (
                <>
                  <button
                    onClick={connectMetaMask}
                    className="flex-1 min-w-[140px] bg-gradient-to-r from-cyan-400 to-violet-500 text-black font-semibold px-4 py-2 rounded-lg hover:scale-105 transition"
                  >
                    Connect MetaMask
                  </button>
                  <button
                    onClick={connectPhantom}
                    className="flex-1 min-w-[140px] border border-cyan-400 px-4 py-2 rounded-lg hover:bg-cyan-400/10 transition"
                  >
                    Connect Phantom
                  </button>
                  <button
                    onClick={() =>
                      alert("WalletConnect integration coming soon.")
                    }
                    className="flex-1 min-w-[140px] border border-cyan-400 px-4 py-2 rounded-lg hover:bg-cyan-400/10 transition"
                  >
                    WalletConnect
                  </button>
                </>
              ) : (
                <>
                  <div className="flex-1 text-sm bg-gray-900 rounded-lg px-4 py-2 truncate">
                    Connected: {account?.slice(0, 6)}...{account?.slice(-6)}
                  </div>
                  <button
                    onClick={disconnect}
                    className="border border-cyan-400 px-4 py-2 rounded-lg hover:bg-cyan-400/10 transition"
                  >
                    Disconnect
                  </button>
                </>
              )}
            </div>

            {/* Steps List */}
            <h4 className="font-semibold mb-2 text-cyan-400">Steps</h4>
            <ol className="list-decimal ml-5 text-gray-300 text-sm space-y-1">
              <li>Connect your wallet (MetaMask, Phantom, or WalletConnect).</li>
              <li>Select token pair (USDT → VECT.AI) in the swap UI.</li>
              <li>Set slippage to 3–5% and confirm the swap.</li>
              <li>
                Claim vested tokens via{" "}
                <a
                  href="https://streamflow.finance/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-400 underline"
                >
                  Streamflow.finance
                </a>
              </li>
            </ol>
          </div>

          {/* Divider */}
          <hr className="my-6 border-gray-700/50" />

          {/* Swap platform buttons (aligned + responsive) */}
          <div className="mt-6 flex flex-col gap-4">
            <a
              href="https://pancakeswap.finance"
              target="_blank"
              rel="noreferrer"
              className="w-full text-center px-6 py-3 rounded-lg font-semibold 
                        bg-gradient-to-r from-yellow-400 to-yellow-500 text-black 
                        hover:scale-105 transition whitespace-nowrap shadow-md"
            >
              🥞 Open PancakeSwap (EVM)
            </a>

            <a
              href="https://jup.ag"
              target="_blank"
              rel="noreferrer"
              className="w-full text-center px-6 py-3 rounded-lg font-semibold 
                        border border-cyan-400 text-cyan-300 hover:bg-cyan-400/10 
                        transition whitespace-nowrap shadow-md"
            >
              💠 Open Jupiter (Solana)
            </a>
          </div>
        </div>

        {/* RIGHT CARD - Quick Swap Preview */}
        <div className="glass-card p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-cyan-400">
              Quick Swap Preview
            </h3>
            <p className="text-gray-300 mb-6">
              This is a placeholder preview. Integrate the actual swap widget
              (PancakeSwap iframe or Jupiter) here for direct on-page swaps.
            </p>

            <div className="rounded-lg bg-gray-900 p-4 text-gray-200">
              <div className="flex justify-between mb-2">
                <div>
                  <div className="text-sm text-gray-400">From</div>
                  <div className="font-semibold">USDT</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-400">To</div>
                  <div className="font-semibold">VECT.AI</div>
                </div>
              </div>
              <div className="text-sm text-gray-400">Slippage: 3%</div>
              <button
                disabled={!connected}
                className="w-full mt-4 px-4 py-2 rounded-md 
                           bg-gradient-to-r from-cyan-400 to-violet-500 text-black 
                           font-semibold hover:scale-105 transition disabled:opacity-40"
              >
                Proceed to Swap
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
