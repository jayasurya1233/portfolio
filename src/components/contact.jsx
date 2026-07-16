import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clipboard, Check, Linkedin, Github, Trophy, Send } from 'lucide-react'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const email = "jayasuryaff34@gmail.com"

  const handleCopy = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs text-brand-400 tracking-widest uppercase">// contact</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 tracking-tight">
            Let's <span className="text-gradient">Connect</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="card-base p-6">
              <h3 className="text-xl font-bold text-dark-text mb-2">Got a project?</h3>
              <p className="text-sm text-dark-muted leading-relaxed">
                Whether you have an internship option, a full-time job opening, or want to build a scaling
                infrastructure project together — feel free to reach out!
              </p>
            </div>

            <div className="space-y-3">
              <div className="card-base p-4 flex items-center gap-4 hover:border-brand-500/20 transition-colors">
                <div className="p-2.5 rounded-lg bg-brand-500/10">
                  <Mail size={18} className="text-brand-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-mono font-semibold text-dark-muted uppercase tracking-wider">Email</p>
                  <span className="text-sm font-medium text-dark-text block truncate">{email}</span>
                </div>
                <button
                  onClick={handleCopy}
                  className="p-2 rounded-lg hover:bg-white/5 text-dark-muted transition-colors"
                  title="Copy"
                >
                  {copied ? <Check size={16} className="text-brand-400" /> : <Clipboard size={16} />}
                </button>
              </div>

              <div className="card-base p-4 flex items-center gap-4 hover:border-brand-500/20 transition-colors">
                <div className="p-2.5 rounded-lg bg-brand-500/10">
                  <Phone size={18} className="text-brand-400" />
                </div>
                <div>
                  <p className="text-[10px] font-mono font-semibold text-dark-muted uppercase tracking-wider">Phone</p>
                  <span className="text-sm font-medium text-dark-text">+91 9025590764</span>
                </div>
              </div>

              <div className="card-base p-4 flex items-center gap-4 hover:border-brand-500/20 transition-colors">
                <div className="p-2.5 rounded-lg bg-brand-500/10">
                  <MapPin size={18} className="text-brand-400" />
                </div>
                <div>
                  <p className="text-[10px] font-mono font-semibold text-dark-muted uppercase tracking-wider">Location</p>
                  <span className="text-sm font-medium text-dark-text">Coimbatore, Tamil Nadu, India</span>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href="https://linkedin.com/in/jayasurya-boopathi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-dark-card border border-white/5 hover:border-brand-500/20 hover:bg-brand-500/5 text-dark-muted hover:text-brand-400 transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/Suryakumar-bit"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-dark-card border border-white/5 hover:border-brand-500/20 hover:bg-brand-500/5 text-dark-muted hover:text-brand-400 transition-all"
              >
                <Github size={20} />
              </a>
              <a
                href="https://leetcode.com/u/Jayasurya_"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-dark-card border border-white/5 hover:border-brand-500/20 hover:bg-brand-500/5 text-dark-muted hover:text-brand-400 transition-all"
              >
                <Trophy size={20} />
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={(e) => {
              e.preventDefault()
              alert("Message sent! (Connect EmailJS or Formspree for production)")
            }}
            className="lg:col-span-3 card-base p-7 space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5 text-left">
                <label className="text-[11px] font-mono font-semibold text-dark-muted uppercase tracking-wider">Name</label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-dark-surface border border-white/5 rounded-xl text-sm text-dark-text placeholder-dark-muted/50 focus:outline-none focus:ring-2 focus:ring-brand-500/40 focus:border-brand-500/40 transition-all"
                />
              </div>
              <div className="space-y-1.5 text-left">
                <label className="text-[11px] font-mono font-semibold text-dark-muted uppercase tracking-wider">Email</label>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 bg-dark-surface border border-white/5 rounded-xl text-sm text-dark-text placeholder-dark-muted/50 focus:outline-none focus:ring-2 focus:ring-brand-500/40 focus:border-brand-500/40 transition-all"
                />
              </div>
            </div>

            <div className="space-y-1.5 text-left">
              <label className="text-[11px] font-mono font-semibold text-dark-muted uppercase tracking-wider">Subject</label>
              <input
                type="text"
                required
                placeholder="What's this about?"
                className="w-full px-4 py-3 bg-dark-surface border border-white/5 rounded-xl text-sm text-dark-text placeholder-dark-muted/50 focus:outline-none focus:ring-2 focus:ring-brand-500/40 focus:border-brand-500/40 transition-all"
              />
            </div>

            <div className="space-y-1.5 text-left">
              <label className="text-[11px] font-mono font-semibold text-dark-muted uppercase tracking-wider">Message</label>
              <textarea
                rows="5"
                required
                placeholder="Tell me about your project or opportunity..."
                className="w-full px-4 py-3 bg-dark-surface border border-white/5 rounded-xl text-sm text-dark-text placeholder-dark-muted/50 focus:outline-none focus:ring-2 focus:ring-brand-500/40 focus:border-brand-500/40 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-brand-500 text-dark-bg font-semibold hover:bg-brand-400 transition-all shadow-lg shadow-brand-500/20 hover:shadow-brand-500/30 inline-flex items-center justify-center gap-2"
            >
              <Send size={16} /> Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
