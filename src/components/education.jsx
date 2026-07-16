import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Award } from 'lucide-react'

const education = [
  {
    institution: "SNS College of Technology, Coimbatore",
    degree: "B.E. Computer Science and Engineering",
    duration: "2023 – 2027",
    highlights: ["Specializing in backend & cloud services", "Practical exposure in cloud-native paradigms"],
  },
  {
    institution: "Dominic Savio Higher Secondary School, Tirupathur",
    degree: "Higher Secondary Education (HSC)",
    duration: "Passed 2023",
    highlights: ["Strong foundation in Computer Applications & Mathematics"],
  },
]

export default function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs text-brand-400 tracking-widest uppercase">// education</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 tracking-tight">
            Academic <span className="text-gradient">History</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-base card-hover p-7 flex flex-col justify-between"
            >
              <div>
                <div className="inline-flex items-center justify-center p-3 rounded-xl bg-brand-500/10 mb-5">
                  <GraduationCap size={24} className="text-brand-400" />
                </div>
                <span className="block font-mono text-xs font-medium text-brand-400 mb-2 uppercase tracking-wider">
                  {edu.duration}
                </span>
                <h3 className="text-lg font-bold text-dark-text leading-snug mb-2">
                  {edu.institution}
                </h3>
                <p className="text-sm font-medium text-dark-muted mb-5">{edu.degree}</p>
              </div>

              <ul className="space-y-2 pt-4 border-t border-white/5">
                {edu.highlights.map((hl, hlIdx) => (
                  <li key={hlIdx} className="flex items-center gap-2 text-sm text-dark-muted">
                    <Award size={14} className="text-brand-400 shrink-0" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
