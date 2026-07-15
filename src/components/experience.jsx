import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Calendar, ShieldCheck } from 'lucide-react'

const internships = [
  {
    id: 1,
    role: "Cloud Computing Intern",
    company: "Scholar X",
    date: "06/2026 – 06/2026",
    details: [
      "Deployed a scalable full-stack web application on cloud infrastructure, ensuring high availability.",
      "Designed a secure cloud storage architecture with role-based access control.",
      "Built a cloud monitoring and incident reporting system for proactive issue detection."
    ],
    tech: ["AWS", "Cloud Security", "Monitoring", "Scale Pipelines"]
  },
  {
    id: 2,
    role: "Python Development Intern",
    company: "InternPe",
    date: "12/2025 – 01/2026",
    details: [
      "Developed Python-based applications and automation scripts to solve real-world problems.",
      "Worked with core Python libraries for data handling, debugging, and testing modules.",
      "Collaborated on version-controlled projects, applying clean coding and problem-solving practices."
    ],
    tech: ["Python", "Automation", "Git", "Clean Architecture"]
  },
  {
    id: 3,
    role: "Java Development Intern",
    company: "Crapersoft",
    date: "05/2024 – 07/2024",
    details: [
      "Worked on Core Java concepts including OOP principles and the Collections framework.",
      "Developed and tested small application modules, performing debugging and unit testing.",
      "Assisted in building backend logic and improving code quality under mentor guidance."
    ],
    tech: ["Java", "OOP", "Collections Framework", "Unit Testing"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Work Experience</h2>
          <div className="h-1.5 w-16 bg-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 pl-6 sm:pl-10 space-y-12">
          {internships.map((job, idx) => (
            <motion.div 
              key={job.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Timeline Indicator Badge */}
              <div className="absolute -left-[43px] sm:-left-[51px] top-1 p-2 rounded-full bg-white dark:bg-dark-card border-2 border-indigo-500 text-indigo-500 transition-colors group-hover:bg-indigo-500 group-hover:text-white shadow-sm">
                <Briefcase size={16} />
              </div>

              {/* Card Container */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-dark-card border border-slate-200/50 dark:border-slate-800/40 shadow-sm transition-all hover:shadow-md">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-800 dark:text-slate-100">{job.role}</h3>
                    <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mt-1">{job.company}</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    <Calendar size={12} /> {job.date}
                  </span>
                </div>

                <ul className="space-y-3 mb-6 text-slate-600 dark:text-slate-300 text-sm leading-relaxed list-none">
                  {job.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2.5">
                      <ShieldCheck size={16} className="text-indigo-500 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {job.tech.map((t) => (
                    <span key={t} className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}