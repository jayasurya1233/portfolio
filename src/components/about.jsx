import React from 'react'
import { motion } from 'framer-motion'
import { Award, Briefcase, Code, GraduationCap } from 'lucide-react'

const stats = [
  { label: "Internships Completed", count: "3", icon: Briefcase, color: "text-indigo-500" },
  { label: "Projects Completed", count: "3+", icon: Code, color: "text-cyan-500" },
  { label: "Earned Certifications", count: "6+", icon: Award, color: "text-purple-500" },
  { label: "Primary Technologies", count: "12+", icon: GraduationCap, color: "text-emerald-500" }
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">About Me</h2>
          <div className="h-1.5 w-16 bg-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left bio block */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed text-base"
          >
            <p className="text-lg font-medium text-slate-800 dark:text-slate-100">
              I am a Computer Science undergraduate specializing in backend and cloud-native development.
            </p>
            <p>
              My hands-on experience revolves around designing and maintaining robust systems using <strong className="text-indigo-500">Java, Spring Boot</strong>, and building enterprise cloud ecosystems.
            </p>
            <p>
              I possess foundational knowledge in cloud computing pipelines (AWS & Lambda architecture), backend authentication services, relational database structures, and modular code debugging pipelines using modern tools.
            </p>

            <div className="border-l-4 border-indigo-500 pl-4 py-2 italic bg-indigo-500/5 dark:bg-indigo-500/10 rounded-r-lg">
              "Dedicated to turning complex logic into structured, efficient, and microservice-compatible products."
            </div>
          </motion.div>

          {/* Right Statistics Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="p-6 rounded-2xl bg-white dark:bg-dark-card border border-slate-200/50 dark:border-slate-800/40 shadow-sm flex flex-col items-start"
                >
                  <div className={`p-3 rounded-xl bg-slate-100 dark:bg-slate-800/50 mb-4 ${stat.color}`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="text-3xl font-extrabold text-slate-800 dark:text-slate-100">{stat.count}</h3>
                  <p className="text-sm font-semibold text-slate-500 mt-1">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  )
}