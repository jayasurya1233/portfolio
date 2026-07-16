import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, Search, Database, ShieldAlert } from 'lucide-react'

const projects = [
  {
    title: "AI-Based Web Scraper",
    desc: "An AI-powered system designed to scrape custom datasets off web environments automatically, leveraging AI modules to structure and display analytics directly through interactive graph visualizers.",
    tech: ["Python", "AI Integration", "Scrapy", "Tailwind CSS", "Data Analysis"],
    icon: Search,
    github: "https://github.com/Suryakumar-bit",
    gradient: "from-brand-500 to-accent",
  },
  {
    title: "Government Database Backup Automation",
    desc: "An automated storage pipeline safeguarding administrative records. Streamlines recurring database backups, optimizing manual overhead and minimizing information corruption risks.",
    tech: ["MySQL", "Bash Scripting", "Cron Jobs", "AWS S3", "Secured Access"],
    icon: Database,
    github: "https://github.com/Suryakumar-bit",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Krypto — Your AI Guardian",
    desc: "A modular, physical anti-stalking system utilizing ESP32 microcontrollers to track repeated BLE signals. Emits security cues (Buzzer/LED Alerts) combined with instantaneous live-cloud reports.",
    tech: ["ESP32 Hardware", "BLE Integration", "Cloud Notifications", "Cybersecurity"],
    icon: ShieldAlert,
    github: "https://github.com/Suryakumar-bit",
    gradient: "from-amber-500 to-orange-500",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs text-brand-400 tracking-widest uppercase">// projects</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 tracking-tight">
            Engineering <span className="text-gradient">Showcase</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-base card-hover flex flex-col justify-between group"
              >
                <div>
                  <div className={`inline-flex items-center justify-center p-3 rounded-xl bg-gradient-to-br ${project.gradient} mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon size={22} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-dark-text mb-3 leading-snug">{project.title}</h3>
                  <p className="text-sm text-dark-muted leading-relaxed mb-5">{project.desc}</p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-dark-surface border border-white/5 text-dark-muted">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-dark-text border border-white/10 rounded-xl hover:bg-white/5 hover:border-brand-500/20 transition-all"
                    >
                      <Github size={15} /> Code
                    </a>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
