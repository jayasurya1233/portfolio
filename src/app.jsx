import React, { useState, useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/navbar'
import Hero from './components/hero'
import About from './components/about'
import Skills from './components/skills'
import Experience from './components/experience'
import Projects from './components/project'
import Education from './components/education'
import Certifications from './components/certification'
import Contact from './components/contact'
import Footer from './components/footer'

export default function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-500 via-accent to-brand-400 origin-left z-50"
        style={{ scaleX }}
      />

      <div className="fixed inset-0 pointer-events-none bg-grid opacity-50 z-0" />

      <div className="fixed top-20 left-[-200px] w-[500px] h-[500px] rounded-full bg-brand-500/5 blur-[150px] pointer-events-none z-0" />
      <div className="fixed bottom-20 right-[-200px] w-[600px] h-[600px] rounded-full bg-accent/5 blur-[180px] pointer-events-none z-0" />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
