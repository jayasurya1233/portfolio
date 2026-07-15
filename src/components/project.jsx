import React from 'react'
import { motion } from 'framer-motion'
import { Github, Globe, Search, Database, ShieldAlert } from 'lucide-react'

const projectsList = [
  {
    title: "AI-Based Web Scraper",
    desc: "An AI-powered system designed to scrape custom datasets off web environments automatically, leveraging AI modules to structure and display analytics directly through interactive graph visualizers.",
    tech: ["Python", "AI Integration", "Scrapy", "Tailwind CSS", "Data Analysis"],
    icon: Search,
    github: "https://github.com/Suryakumar-bit"
  },
  {
    title: "Government Database Backup Automation",
    desc: "An automated storage pipeline safeguarding administrative records. Streamlines recurring database backups, optimizing manual overhead and minimizing information corruption risks.",
    tech: ["MySQL", "Bash Scripting", "Cron Jobs", "AWS S3", "Secured Access"],
    icon: Database,
    github: "https://github.com/Suryakumar-bit"
  },
  {
    title: "Krypto – Your AI Guardian",
    desc: "A modular, physical anti-stalking system utilizing ESP32 microcontrollers to track repeated BLE signals. Emits security cues (Buzzer/LED Alerts) combined with instantaneous live-cloud reports.",
    tech: ["ESP32 Hardware", "BLE Integration", "Cloud Notifications", "Cybersecurity Core"],
    icon: ShieldAlert,
    github: "https://github.com/Suryakumar-bit"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-100/50 dark:bg-slate-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Personal Engineering Showcase</h2>
          <div className="h-1.5 w-16 bg-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsList.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div 
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col justify-between bg-white dark:bg-dark-card border border-slate-200/50 dark:border-slate-800/40 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div>
                  <div className="inline-flex items-center justify-center p-3.5 rounded-2xl bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">{project.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                    {project.desc}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                      <Github size={16} /> Code
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  )
}