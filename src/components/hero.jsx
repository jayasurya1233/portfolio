import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronRight } from 'lucide-react'

const roles = ["Backend Developer", "Java Developer", "Cloud Engineer"]

const terminalLines = [
  { prompt: "~", cmd: "whoami", output: "Jayasurya B" },
  { prompt: "~", cmd: "cat role.txt", output: "Backend Developer | Cloud Engineer" },
  { prompt: "~", cmd: "ls skills/", output: "Java  SpringBoot  AWS  Docker  MySQL" },
  { prompt: "~", cmd: "echo $STATUS", output: "Open for opportunities" },
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [currentLine, setCurrentLine] = useState(0)
  const [displayedLines, setDisplayedLines] = useState([])
  const [currentCmdText, setCurrentCmdText] = useState("")
  const [showOutput, setShowOutput] = useState(false)

  useEffect(() => {
    let timer
    const currentFullRole = roles[roleIndex]
    if (isDeleting) {
      timer = setTimeout(() => setDisplayedText(prev => prev.slice(0, -1)), 50)
    } else {
      timer = setTimeout(() => setDisplayedText(currentFullRole.slice(0, displayedText.length + 1)), 100)
    }
    if (!isDeleting && displayedText === currentFullRole) {
      timer = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }
    return () => clearTimeout(timer)
  }, [displayedText, isDeleting, roleIndex])

  useEffect(() => {
    if (currentLine >= terminalLines.length) return
    const line = terminalLines[currentLine]
    let i = 0
    const typeTimer = setInterval(() => {
      if (i <= line.cmd.length) {
        setCurrentCmdText(line.cmd.slice(0, i))
        i++
      } else {
        clearInterval(typeTimer)
        setTimeout(() => {
          setShowOutput(true)
          setTimeout(() => {
            setDisplayedLines(prev => [...prev, { ...line, showOutput: true }])
            setShowOutput(false)
            setCurrentCmdText("")
            setCurrentLine(prev => prev + 1)
          }, 600)
        }, 300)
      }
    }, 40)
    return () => clearInterval(typeTimer)
  }, [currentLine])

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20">
            <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
            <span className="text-xs font-semibold text-brand-400 font-mono">Available for work</span>
          </div>

          <div>
            <p className="text-dark-muted font-mono text-sm mb-3">
              <span className="text-brand-500">$</span> greet --name
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Hi, I'm{' '}
              <span className="text-gradient">Jayasurya B</span>
            </h1>
            <div className="mt-4 h-12 font-mono text-xl sm:text-2xl font-bold text-brand-400">
              <span>{displayedText}</span>
              <span className="animate-pulse text-brand-500">_</span>
            </div>
          </div>

          <p className="text-dark-muted text-base sm:text-lg leading-relaxed max-w-xl">
            Computer Science undergraduate specializing in Backend Development, Java, Spring Boot,
            Cloud Computing, and DevOps. Passionate about creating secure, scalable, and data-driven solutions.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-brand-500 text-dark-bg font-semibold hover:bg-brand-400 transition-all shadow-lg shadow-brand-500/20 hover:shadow-brand-500/30"
            >
              View Projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/10 text-dark-text font-semibold hover:bg-white/5 hover:border-brand-500/30 transition-all"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="rounded-2xl bg-dark-card/90 border border-white/10 overflow-hidden shadow-2xl shadow-black/30">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-dark-surface/50">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs font-mono text-dark-muted ml-2">jayasurya@portfolio:~</span>
            </div>
            <div className="p-5 font-mono text-sm space-y-3 min-h-[280px]">
              {displayedLines.map((line, i) => (
                <div key={i}>
                  <div className="flex items-center gap-2">
                    <span className="text-brand-500 font-bold">{line.prompt}</span>
                    <span className="text-dark-muted">~/portfolio $</span>
                    <span className="text-dark-text">{line.cmd}</span>
                  </div>
                  <div className="pl-6 text-brand-300 text-xs">{line.output}</div>
                </div>
              ))}
              {currentLine < terminalLines.length && (
                <div className="flex items-center gap-2">
                  <span className="text-brand-500 font-bold">~</span>
                  <span className="text-dark-muted">~/portfolio $</span>
                  <span className="text-dark-text">{currentCmdText}</span>
                  {!showOutput && <span className="w-2 h-4 bg-brand-400 animate-pulse" />}
                </div>
              )}
              {showOutput && currentLine < terminalLines.length && (
                <div className="pl-6 text-brand-300 text-xs animate-fade-in">
                  {terminalLines[currentLine].output}
                </div>
              )}
            </div>
          </div>

          <div className="absolute -bottom-6 -right-6 p-4 rounded-xl glass glow-border hidden sm:flex items-center gap-3 animate-float">
            <div className="p-2 rounded-lg bg-brand-500/10">
              <ChevronRight className="text-brand-400" size={20} />
            </div>
            <div>
              <p className="text-[10px] text-dark-muted uppercase font-semibold tracking-wider">Primary Stack</p>
              <p className="text-sm font-bold text-dark-text">Java + Spring Boot</p>
            </div>
          </div>

          <div className="absolute -top-6 -left-6 p-4 rounded-xl glass glow-border hidden sm:flex items-center gap-3 animate-float" style={{ animationDelay: '2s' }}>
            <div className="p-2 rounded-lg bg-accent/10">
              <span className="text-lg">☁️</span>
            </div>
            <div>
              <p className="text-[10px] text-dark-muted uppercase font-semibold tracking-wider">Platform</p>
              <p className="text-sm font-bold text-dark-text">AWS + Docker</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
