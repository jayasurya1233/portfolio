import React from 'react'
import { motion } from 'framer-motion'
import { BadgeCheck, BookOpen, Languages } from 'lucide-react'

const certifications = [
  { name: "Azure AI Fundamentals", issuer: "Microsoft" },
  { name: "Database Management System, OS, Cloud Computing, Data Science", issuer: "PrepInsta" },
  { name: "Python Programming", issuer: "Infosys Springboard" }
];

const coursework = [
  "Data Structures & Algorithms", 
  "Object Oriented Programming", 
  "Database Management Systems", 
  "Cloud Computing", 
  "Operating Systems"
];

const languages = [
  { name: "Tamil", level: "Native or Proficient (C2)", bar: 100 },
  { name: "English", level: "Upper Intermediate (B2)", bar: 80 },
  { name: "French", level: "Basics (A1)", bar: 25 }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-100/50 dark:bg-slate-900/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Credentials & Focus Areas</h2>
          <div className="h-1.5 w-16 bg-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Column 1: Certifications */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <BadgeCheck className="text-indigo-500" size={20} />
              <h3 className="text-lg font-extrabold text-slate-800 dark:text-slate-100">Certifications</h3>
            </div>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div key={cert.name} className="p-4 rounded-xl bg-white dark:bg-dark-card border border-slate-200/50 dark:border-slate-800/40 shadow-sm">
                  <h4 className="font-bold text-sm text-slate-800 dark:text-slate-100 leading-tight">{cert.name}</h4>
                  <p className="text-xs text-indigo-500 mt-1 font-semibold">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Relevant Coursework */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="text-indigo-500" size={20} />
              <h3 className="text-lg font-extrabold text-slate-800 dark:text-slate-100">Core Coursework</h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {coursework.map((subj) => (
                <span 
                  key={subj} 
                  className="px-4 py-2 rounded-xl text-sm font-semibold bg-white dark:bg-dark-card border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 shadow-sm hover:border-indigo-500 transition-colors cursor-default"
                >
                  {subj}
                </span>
              ))}
            </div>
          </div>

          {/* Column 3: Languages */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <Languages className="text-indigo-500" size={20} />
              <h3 className="text-lg font-extrabold text-slate-800 dark:text-slate-100">Languages</h3>
            </div>
            <div className="space-y-4">
              {languages.map((lang) => (
                <div key={lang.name} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="font-bold text-slate-800 dark:text-slate-100">{lang.name}</span>
                    <span className="text-xs text-slate-400 font-semibold">{lang.level}</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${lang.bar}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}