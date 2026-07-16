import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react'

const jobs = [
  {
    id: 1,
    role: "Cloud Computing Intern",
    company: "Scholar X",
    date: "Jun 2026",
    details: [
      "Deployed a scalable full-stack web application on cloud infrastructure, ensuring high availability.",
      "Designed a secure cloud storage architecture with role-based access control.",
      "Built a cloud monitoring and incident reporting system for proactive issue detection."
    ],
    tech: ["AWS", "Cloud Security", "Monitoring", "Scale Pipelines"],
  },
  {
    id: 2,
    role: "Python Development Intern",
    company: "InternPe",
    date: "Dec 2025 – Jan 2026",
    details: [
      "Developed Python-based applications and automation scripts to solve real-world problems.",
      "Worked with core Python libraries for data handling, debugging, and testing modules.",
      "Collaborated on version-controlled projects, applying clean coding and problem-solving practices."
    ],
    tech: ["Python", "Automation", "Git", "Clean Architecture"],
  },
  {
    id: 3,
    role: "Java Development Intern",
    company: "Crapersoft",
    date: "May 2024 – Jul 2024",
    details: [
      "Worked on Core Java concepts including OOP principles and the Collections framework.",
      "Developed and tested small application modules, performing debugging and unit testing.",
      "Assisted in building backend logic and improving code quality under mentor guidance."
    ],
    tech: ["Java", "OOP", "Collections Framework", "Unit Testing"],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs text-brand-400 tracking-widest uppercase">// experience</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 tracking-tight">
            Work <span className="text-gradient">History</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-brand-500/50 via-brand-500/20 to-transparent" />

          <div className="space-y-10">
            {jobs.map((job, idx) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative pl-16 sm:pl-20"
              >
                <div className="absolute left-3 sm:left-5 top-6 w-7 h-7 rounded-full bg-dark-bg border-2 border-brand-500 flex items-center justify-center shadow-lg shadow-brand-500/20">
                  <Briefcase size={12} className="text-brand-400" />
                </div>

                <div className="card-base card-hover p-6 sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                    <div>
                      <h3 className="text-lg font-bold text-dark-text">{job.role}</h3>
                      <p className="text-sm font-semibold text-brand-400 mt-1">{job.company}</p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-medium bg-dark-surface border border-white/5 text-dark-muted">
                      <Calendar size={12} /> {job.date}
                    </span>
                  </div>

                  <ul className="space-y-2.5 mb-5">
                    {job.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5 text-sm text-dark-muted leading-relaxed">
                        <CheckCircle2 size={16} className="text-brand-500 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {job.tech.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
