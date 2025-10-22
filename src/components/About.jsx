import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../animations/fadeIn";
import logoVectorium from "../assets/logos/Vectorium logo (1).svg";
import logoDept from "../assets/logos/Vectorium logo (5).svg";

export default function About() {
  return (
    <section id="about" className="py-24 max-w-6xl mx-auto px-6">
      <motion.h2
        variants={fadeIn("up", 0)}
        initial="hidden"
        whileInView="show"
        className="text-3xl font-bold mb-8"
      >
        About VECT • AI
      </motion.h2>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        className="grid md:grid-cols-2 gap-12 items-center"
      >
        <div>
          <p className="text-gray-300 mb-6 leading-relaxed">
            VECT • AI is the evolution of Vectorium’s ecosystem — a decentralized
            intelligence protocol integrating blockchain, AI, and tokenized data
            streams. It powers IntelliJAM and IntelliGEM systems, forming the
            backbone of the Vectorium Innovation Network.
          </p>
          <div className="flex gap-6 mt-6 opacity-90">
            <img src={logoVectorium} alt="Vectorium Holding" className="h-10" />
            <img src={logoDept} alt="VECT AI Department" className="h-10" />
          </div>
        </div>
        <div className="glass-card p-6 rounded-xl">
          <h4 className="text-xl font-semibold mb-3 text-cyan-400">Mission</h4>
          <p className="text-gray-300">
            To merge human creativity and machine intelligence into a single,
            trustable, tokenized infrastructure.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
