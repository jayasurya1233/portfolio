import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const categories = [
  {
    id: 'all',
    label: 'All',
  },
  {
    id: 'languages',
    label: 'Languages',
    items: [
      { name: 'Java', level: 90 },
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 85 },
    ]
  },
  {
    id: 'frameworks',
    label: 'Frameworks',
    items: [
      { name: 'Spring Boot', level: 85 },
      { name: 'JWT Authentication', level: 80 },
    ]
  },
  {
    id: 'databases',
    label: 'Databases',
    items: [
      { name: 'MySQL', level: 80 },
      { name: 'CRUD Operations', level: 90 },
    ]
  },
  {
    id: 'cloud',
    label: 'Cloud & DevOps',
    items: [
      { name: 'AWS (EC2, S3, Lambda)', level: 80 },
      { name: 'Docker', level: 75 },
      { name: 'Linux OS', level: 80 },
    ]
  },
  {
    id: 'tools',
    label: 'Tools',
    items: [
      { name: 'GitHub / Git', level: 85 },
      { name: 'Postman', level: 90 },
      { name: 'IntelliJ IDEA', level: 85 },
      { name: 'VS Code', level: 90 },
      { name: 'Eclipse', level: 80 },
    ]
  },
]

const getIcon = (name) => {
  const icons = {
    'Java': '☕', 'HTML5': '🌐', 'CSS3': '🎨',
    'Spring Boot': '🍃', 'JWT Authentication': '🔐',
    'MySQL': '🗄️', 'CRUD Operations': '⚡',
    'AWS (EC2, S3, Lambda)': '☁️', 'Docker': '🐳', 'Linux OS': '🐧',
    'GitHub / Git': '🔀', 'Postman': '📮', 'IntelliJ IDEA': '💡',
    'VS Code': '📝', 'Eclipse': '🌑',
  }
  return icons[name] || '💻'
}

export default function Skills() {
  const [active, setActive] = useState('all')

  const allItems = categories.filter(c => c.id !== 'all').flatMap(c => c.items)
  const displayed = active === 'all' ? allItems : categories.find(c => c.id === active)?.items || []

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="font-mono text-xs text-brand-400 tracking-widest uppercase">// skillset</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 tracking-tight">
            Technical <span className="text-gradient">Toolbelt</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 font-mono ${
                active === cat.id
                  ? 'bg-brand-500 text-dark-bg shadow-lg shadow-brand-500/20'
                  : 'bg-dark-card border border-white/5 text-dark-muted hover:text-brand-300 hover:border-brand-500/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {displayed.map((skill, i) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="card-base card-hover group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{getIcon(skill.name)}</span>
                    <span className="font-semibold text-dark-text text-sm">{skill.name}</span>
                  </div>
                  <span className="font-mono text-xs font-bold text-brand-400">{skill.level}%</span>
                </div>
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut", delay: i * 0.05 }}
                    className="h-full bg-gradient-to-r from-brand-500 to-accent rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
