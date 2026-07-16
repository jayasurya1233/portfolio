import React from 'react'
import { motion } from 'framer-motion'
import { BadgeCheck, BookOpen, Languages } from 'lucide-react'

const certifications = [
  { name: "Azure AI Fundamentals", issuer: "Microsoft" },
  { name: "Database Management System, OS, Cloud Computing, Data Science", issuer: "PrepInsta" },
  { name: "Python Programming", issuer: "Infosys Springboard" },
]

const coursework = [
  "Data Structures & Algorithms",
  "Object Oriented Programming",
  "Database Management Systems",
  "Cloud Computing",
  "Operating Systems",
]

const languages = [
  { name: "Tamil", level: "Native (C2)", pct: 100 },
  { name: "English", level: "Upper Intermediate (B2)", pct: 80 },
  { name: "French", level: "Basics (A1)", pct: 25 },
]

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs text-brand-400 tracking-widest uppercase">// credentials</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 tracking-tight">
            Credentials & <span className="text-gradient">Focus Areas</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-base"
          >
            <div className="flex items-center gap-2.5 mb-6">
              <BadgeCheck className="text-brand-400" size={20} />
              <h3 className="text-base font-bold text-dark-text">Certifications</h3>
            </div>
            <div className="space-y-3">
              {certifications.map((cert) => (
                <div key={cert.name} className="p-4 rounded-xl bg-dark-surface border border-white/5 hover:border-brand-500/20 transition-colors">
                  <h4 className="font-semibold text-sm text-dark-text leading-snug">{cert.name}</h4>
                  <p className="text-xs text-brand-400 mt-1.5 font-mono">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Coursework */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="card-base"
          >
            <div className="flex items-center gap-2.5 mb-6">
              <BookOpen className="text-brand-400" size={20} />
              <h3 className="text-base font-bold text-dark-text">Core Coursework</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {coursework.map((subj) => (
                <span
                  key={subj}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium bg-dark-surface border border-white/5 text-dark-muted hover:border-brand-500/20 hover:text-brand-300 transition-all cursor-default"
                >
                  {subj}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="card-base"
          >
            <div className="flex items-center gap-2.5 mb-6">
              <Languages className="text-brand-400" size={20} />
              <h3 className="text-base font-bold text-dark-text">Languages</h3>
            </div>
            <div className="space-y-5">
              {languages.map((lang) => (
                <div key={lang.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-dark-text">{lang.name}</span>
                    <span className="text-xs font-mono text-dark-muted">{lang.level}</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-brand-500 to-accent rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
