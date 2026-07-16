import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Code, Award, Cpu, Quote } from 'lucide-react'

const stats = [
  { label: "Internships", value: "3", icon: Briefcase, color: "from-brand-500 to-brand-600" },
  { label: "Projects", value: "3+", icon: Code, color: "from-accent to-cyan-400" },
  { label: "Certifications", value: "6+", icon: Award, color: "from-purple-500 to-purple-600" },
  { label: "Technologies", value: "12+", icon: Cpu, color: "from-emerald-500 to-emerald-600" },
]

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs text-brand-400 tracking-widest uppercase">// about me</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 tracking-tight">
            Who <span className="text-gradient">I Am</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 card-base space-y-5"
          >
            <p className="text-lg font-semibold text-dark-text leading-relaxed">
              I am a Computer Science undergraduate specializing in backend and cloud-native development.
            </p>
            <p className="text-dark-muted leading-relaxed">
              My hands-on experience revolves around designing and maintaining robust systems using{' '}
              <span className="text-brand-400 font-semibold">Java, Spring Boot</span>, and building
              enterprise cloud ecosystems on AWS.
            </p>
            <p className="text-dark-muted leading-relaxed">
              I possess foundational knowledge in cloud computing pipelines (AWS & Lambda architecture),
              backend authentication services, relational database structures, and modular code debugging
              pipelines using modern tools.
            </p>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-brand-500/5 border border-brand-500/10 mt-4">
              <Quote size={20} className="text-brand-500 shrink-0 mt-0.5" />
              <p className="text-sm italic text-brand-300/80 leading-relaxed">
                Dedicated to turning complex logic into structured, efficient, and microservice-compatible products.
              </p>
            </div>
          </motion.div>

          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {stats.map((stat, i) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="card-base card-hover flex flex-col items-center justify-center text-center p-5"
                >
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} mb-3 shadow-lg`}>
                    <Icon size={22} className="text-white" />
                  </div>
                  <h3 className="text-3xl font-extrabold text-dark-text">{stat.value}</h3>
                  <p className="text-xs font-medium text-dark-muted mt-1">{stat.label}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
