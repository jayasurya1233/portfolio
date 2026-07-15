import React, { useState } from 'react'
import { motion } from 'framer-motion'

const skillCategories = [
  {
    id: 'all',
    title: 'All Skills'
  },
  {
    id: 'programming',
    title: 'Languages',
    skills: [
      { name: 'Java', level: 90 },
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 85 }
    ]
  },
  {
    id: 'frameworks',
    title: 'Frameworks',
    skills: [
      { name: 'Spring Boot', level: 85 },
      { name: 'JWT Authentication', level: 80 }
    ]
  },
  {
    id: 'databases',
    title: 'Databases',
    skills: [
      { name: 'MySQL', level: 80 },
      { name: 'CRUD Operations', level: 90 }
    ]
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    skills: [
      { name: 'AWS (EC2, S3, Lambda)', level: 80 },
      { name: 'Docker', level: 75 },
      { name: 'Linux OS', level: 80 }
    ]
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    skills: [
      { name: 'GitHub / Git', level: 85 },
      { name: 'Postman', level: 90 },
      { name: 'IntelliJ IDEA', level: 85 },
      { name: 'VS Code', level: 90 },
      { name: 'Eclipse', level: 80 }
    ]
  }
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const getAllSkills = () => {
    return skillCategories
      .filter(cat => cat.id !== 'all')
      .flatMap(cat => cat.skills);
  };

  const displayedSkills = activeCategory === 'all' 
    ? getAllSkills() 
    : skillCategories.find(cat => cat.id === activeCategory)?.skills || [];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-100/50 dark:bg-slate-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Technical Toolbelt</h2>
          <div className="h-1.5 w-16 bg-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat.id 
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20' 
                  : 'bg-white dark:bg-dark-card border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {displayedSkills.map((skill, index) => (
            <motion.div
              layout
              key={skill.name}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200/50 dark:border-slate-800/40 shadow-sm"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="font-bold text-slate-800 dark:text-slate-100 text-base">{skill.name}</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="bg-gradient-to-r from-indigo-500 to-cyan-500 h-full rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}