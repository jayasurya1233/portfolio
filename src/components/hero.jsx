import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, FileText, Code2, Cloud, Database } from 'lucide-react'

const roles = ["Backend Developer", "Java Developer", "Cloud Engineer"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentFullRole = roles[roleIndex];
    
    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayedText(prev => prev.slice(0, -1));
      }, 50);
    } else {
      timer = setTimeout(() => {
        setDisplayedText(currentFullRole.slice(0, displayedText.length + 1));
      }, 100);
    }

    if (!isDeleting && displayedText === currentFullRole) {
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Copy block */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 flex flex-col justify-center space-y-6"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400 w-max">
            Open for Opportunities
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Hi, I am <span className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-clip-text text-transparent">Jayasurya B</span>
            <div className="h-16 mt-2 text-slate-700 dark:text-slate-200 text-3xl sm:text-4xl font-bold">
              <span>{displayedText}</span>
              <span className="animate-pulse text-indigo-500">|</span>
            </div>
          </h1>

          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
            Computer Science undergraduate specializing in Backend Development, Java, Spring Boot, Cloud Computing, and DevOps. Passionate about creating secure, scalable, and data-driven solutions.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a 
              href="#projects" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-500 transition-all shadow-md shadow-indigo-600/10 hover:shadow-indigo-600/20"
            >
              View Projects <ArrowRight size={16} />
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Right Floating Visual Graphics */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative flex justify-center items-center"
        >
          {/* Main Visual Circle Card */}
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-indigo-600 to-cyan-500 p-1 shadow-2xl shadow-indigo-500/10 dark:shadow-indigo-500/5">
            <div className="w-full h-full bg-slate-100 dark:bg-dark-bg rounded-full flex flex-col justify-center items-center overflow-hidden">
              <span className="text-7xl">⚡</span>
              <p className="font-bold text-lg mt-3 text-slate-700 dark:text-slate-200">Jayasurya B</p>
              <p className="text-xs text-indigo-500 dark:text-indigo-400 font-medium">Coimbatore, TN, India</p>
            </div>

            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, -12, 0] }} 
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} 
              className="absolute -top-4 -left-4 p-3 bg-white dark:bg-dark-card rounded-2xl shadow-md border border-slate-200/50 dark:border-slate-800/40 flex items-center gap-2.5"
            >
              <Code2 className="text-indigo-500" size={20} />
              <div className="text-left"><p className="text-[10px] text-slate-400 font-medium leading-none">PRIMARY</p><p className="text-xs font-bold text-slate-700 dark:text-slate-200">Java Developer</p></div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 12, 0] }} 
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }} 
              className="absolute -bottom-4 -right-4 p-3 bg-white dark:bg-dark-card rounded-2xl shadow-md border border-slate-200/50 dark:border-slate-800/40 flex items-center gap-2.5"
            >
              <Cloud className="text-cyan-500" size={20} />
              <div className="text-left"><p className="text-[10px] text-slate-400 font-medium leading-none">PLATFORM</p><p className="text-xs font-bold text-slate-700 dark:text-slate-200">AWS / DevOps</p></div>
            </motion.div>

            <motion.div 
              animate={{ x: [0, 8, 0] }} 
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }} 
              className="absolute top-[40%] -right-12 p-3 bg-white dark:bg-dark-card rounded-2xl shadow-md border border-slate-200/50 dark:border-slate-800/40 flex items-center gap-2.5"
            >
              <Database className="text-purple-500" size={20} />
              <div className="text-left"><p className="text-[10px] text-slate-400 font-medium leading-none">ENGINE</p><p className="text-xs font-bold text-slate-700 dark:text-slate-200">Spring Boot</p></div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}