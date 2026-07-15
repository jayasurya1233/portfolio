import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Award } from 'lucide-react'

const educationList = [
  {
    institution: "SNS College of Technology, Coimbatore",
    degree: "B.E. Computer Science and Engineering",
    duration: "2023 – 2027",
    highlights: ["Specializing in backend & cloud services", "Practical exposure in cloud-native paradigms"]
  },
  {
    institution: "Dominic Savio Higher Secondary School, Tirupathur",
    degree: "Higher Secondary Education (HSC)",
    duration: "Passed 03/2023",
    highlights: ["Strong foundation in Computer Applications & Mathematics"]
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Academic History</h2>
          <div className="h-1.5 w-16 bg-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationList.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-white dark:bg-dark-card border border-slate-200/50 dark:border-slate-800/40 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 mb-6">
                  <GraduationCap size={24} />
                </div>
                <span className="block text-xs font-bold uppercase tracking-wider text-indigo-500 dark:text-indigo-400 mb-2">
                  {edu.duration}
                </span>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 leading-snug mb-2">
                  {edu.institution}
                </h3>
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-6">
                  {edu.degree}
                </p>
              </div>

              <ul className="space-y-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-4">
                {edu.highlights.map((hl, hlIdx) => (
                  <li key={hlIdx} className="flex items-center gap-2">
                    <Award size={14} className="text-indigo-500 shrink-0" />
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