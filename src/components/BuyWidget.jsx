import React, { useEffect, useState } from "react";

export default function BuyWidget() {
  const [connected, setConnected] = useState(false);
  const [account, setAccount] = useState(null);
  const [provider, setProvider] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.ethereum && window.ethereum.selectedAddress) {
        setConnected(true);
        setAccount(window.ethereum.selectedAddress);
        setProvider("metamask");
      }
      if (window.solana && window.solana.isPhantom && window.solana.isConnected) {
        setConnected(true);
        setAccount(window.solana.publicKey?.toString());
        setProvider("phantom");
      }
    }
  }, []);

  const connectMetaMask = async () => {
    if (!window.ethereum) {
      alert("No MetaMask detected. Please install MetaMask.");
      return;
    }
    try {
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      setAccount(accounts[0]);
      setConnected(true);
      setProvider("metamask");
    } catch (err) {
      console.error(err);
      alert("MetaMask connection canceled or failed.");
    }
  };

  const connectPhantom = async () => {
    if (!window.solana || !window.solana.isPhantom) {
      alert("Please install Phantom wallet to connect (Solana).");
      return;
    }
    try {
      const resp = await window.solana.connect();
      setAccount(resp.publicKey.toString());
      setConnected(true);
      setProvider("phantom");
    } catch (err) {
      console.error(err);
      alert("Phantom connection canceled or failed.");
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

  // NOTE: Full buy integration (PancakeSwap / Jupiter) should be embedded via their widgets or SDKs.
  // Here we provide a simple UX and a link to an external swap (placeholder).
  return (
    <section id="buy" className="py-16">
      <h3 className="text-2xl font-semibold">How to Buy</h3>
      <div className="mt-6 grid md:grid-cols-2 gap-6 items-start">
        <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
          <h4 className="font-semibold">Connect</h4>
          <p className="text-gray-300 mt-2">Connect MetaMask (EVM) or Phantom (Solana). WalletConnect coming soon.</p>

          <div className="mt-4 flex flex-wrap gap-3">
            {!connected ? (
              <>
                <button onClick={connectMetaMask} className="px-4 py-2 rounded-lg bg-neonCyan text-black">Connect MetaMask</button>
                <button onClick={connectPhantom} className="px-4 py-2 rounded-lg border">Connect Phantom</button>
                <button onClick={() => alert('WalletConnect placeholder - add web3modal for real support.')} className="px-4 py-2 rounded-lg border">WalletConnect</button>
              </>
            ) : (
              <>
                <div className="px-4 py-2 rounded-lg bg-gray-800">Connected: <span className="font-mono">{account?.slice(0,6)}...{account?.slice(-6)}</span></div>
                <button onClick={disconnect} className="px-4 py-2 rounded-lg border">Disconnect</button>
              </>
            )}
          </div>

          <div className="mt-6">
            <h5 className="font-semibold">Steps</h5>
            <ol className="list-decimal ml-5 mt-2 text-gray-300 space-y-1">
              <li>Connect your wallet (MetaMask, Phantom, or WalletConnect).</li>
              <li>Select token pair (USDT → VECT.AI) in the swap UI.</li>
              <li>Set slippage to 3–5% and confirm the swap.</li>
              <li>Claim vested tokens via Streamflow.finance (if applicable).</li>
            </ol>
            <div className="mt-4">
              <a href="https://pancakeswap.finance" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md bg-gray-700 hover:bg-gray-600">Open PancakeSwap (EVM)</a>
              <a href="https://jup.ag" target="_blank" rel="noreferrer" className="ml-3 px-4 py-2 rounded-md border hover:bg-gray-800">Open Jupiter (Solana)</a>
            </div>
          </div>
        </div>

        <div className="rounded-xl p-6 border border-gray-800">
          <h4 className="font-semibold">Quick Swap Preview</h4>
          <p className="mt-3 text-gray-300">This is a placeholder preview. Integrate the actual swap widget (PancakeSwap iframe or Jupiter) here for direct on-page swaps.</p>
          <div className="mt-6 p-4 rounded bg-gray-900">
            <div className="flex justify-between">
              <div>
                <div className="text-sm text-gray-400">From</div>
                <div className="font-medium">USDT</div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-400">To</div>
                <div className="font-medium">VECT.AI</div>
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-400">Slippage: <strong>3%</strong></div>
            <div className="mt-4">
              <button disabled={!connected} className="px-4 py-2 rounded-md bg-neonCyan text-black disabled:opacity-40">Proceed to Swap</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
