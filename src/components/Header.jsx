import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../animations/fadeIn";
import logoMain from "../assets/logos/Vectorium logo (3).svg";

export default function Header() {
  return (
    <header className="relative h-screen flex flex-col justify-center items-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#030018] via-[#060031] to-black animate-gradient" />
      <motion.img
        src={logoMain}
        alt="VECT AI Logo"
        className="w-64 md:w-80 mb-8 drop-shadow-xl"
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
      />
      <motion.h1
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        className="text-5xl md:text-6xl font-extrabold glow-text bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent"
      >
        Empowering the Next Era of Intelligent Assets
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView="show"
        className="mt-4 text-lg text-gray-300"
      >
        Built by Vectorium • Decentralized AI Protocol for Real-World Data
      </motion.p>
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        className="mt-10 flex gap-4"
      >
        <a
          href="#buy"
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-violet-500 text-black font-semibold hover:scale-105 transition"
        >
          Buy Tokens
        </a>
        <a
          href="#whitepaper"
          className="px-6 py-3 rounded-xl border border-cyan-400 hover:bg-cyan-400/10 transition"
        >
          Read Whitepaper
        </a>
      </motion.div>
    </header>
  );
}
