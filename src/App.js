import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Vision from './components/Vision'
import Tokenomics from './components/Tokenomics'
import Docs from './components/Docs'
import Buy from './components/Buy'
import Roadmap from './components/Roadmap'
import Team from './components/Team'
import Footer from './components/Footer'

export default function App(){ 
  return (
    <div className="min-h-screen">
      <Hero />
      <main className="max-w-6xl mx-auto p-6 space-y-6">
        <About />
        <Vision />
        <Tokenomics />
        <Docs />
        <Buy />
        <Roadmap />
        <Team />
      </main>
      <Footer />
    </div>
  )
}
