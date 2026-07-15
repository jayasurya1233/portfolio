import React, { useState } from 'react'
import { Mail, Phone, MapPin, Clipboard, Check, Linkedin, Github, Trophy } from 'lucide-react'

export default function Contact() {
  const [copiedText, setCopiedText] = useState(false);
  const emailAddr = "jayasuryaff34@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(emailAddr);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Let's Connect</h2>
          <div className="h-1.5 w-16 bg-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2">Got a project?</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                Whether you have an internship option, a full-time job opening, or want to build a scaling infrastructure project together—feel free to drop an inquiry!
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-100/50 dark:bg-slate-900/40">
                  <Mail className="text-indigo-500 shrink-0" size={20} />
                  <div className="text-left flex-1 min-w-0">
                    <p className="text-xs font-semibold text-slate-400">EMAIL</p>
                    <span className="text-sm font-bold text-slate-700 dark:text-slate-200 block truncate">{emailAddr}</span>
                  </div>
                  <button 
                    onClick={handleCopy}
                    className="p-1.5 rounded-md hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-400"
                    title="Copy Email"
                  >
                    {copiedText ? <Check className="text-emerald-500" size={16} /> : <Clipboard size={16} />}
                  </button>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-100/50 dark:bg-slate-900/40">
                  <Phone className="text-indigo-500 shrink-0" size={20} />
                  <div className="text-left">
                    <p className="text-xs font-semibold text-slate-400">PHONE</p>
                    <span className="text-sm font-bold text-slate-700 dark:text-slate-200 block">+91 9025590764</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-100/50 dark:bg-slate-900/40">
                  <MapPin className="text-indigo-500 shrink-0" size={20} />
                  <div className="text-left">
                    <p className="text-xs font-semibold text-slate-400">LOCATION</p>
                    <span className="text-sm font-bold text-slate-700 dark:text-slate-200 block">Coimbatore, Tamil Nadu, India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Profiles Links */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Connect with me online</h4>
              <div className="flex gap-3">
                <a 
                  href="https://linkedin.com/in/jayasurya-boopathi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-100 dark:bg-slate-800/50 hover:bg-indigo-50 dark:hover:bg-indigo-950/20 text-slate-600 dark:text-slate-300 hover:text-indigo-500 dark:hover:text-indigo-400 rounded-xl transition-all"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="https://github.com/Suryakumar-bit" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-100 dark:bg-slate-800/50 hover:bg-indigo-50 dark:hover:bg-indigo-950/20 text-slate-600 dark:text-slate-300 hover:text-indigo-500 dark:hover:text-indigo-400 rounded-xl transition-all"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://leetcode.com/u/Jayasurya_" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-100 dark:bg-slate-800/50 hover:bg-indigo-50 dark:hover:bg-indigo-950/20 text-slate-600 dark:text-slate-300 hover:text-indigo-500 dark:hover:text-indigo-400 rounded-xl transition-all"
                >
                  <Trophy size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <form 
            onSubmit={(e) => { e.preventDefault(); alert("Form submitted! (In production, route this directly to an active email service like EmailJS or Formspree).") }} 
            className="lg:col-span-7 p-8 bg-white dark:bg-dark-card border border-slate-200/50 dark:border-slate-800/40 rounded-3xl shadow-sm space-y-5"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1 text-left">
                <label className="text-xs font-bold text-slate-400 uppercase">Your Name</label>
                <input 
                  type="text" 
                  required 
                  placeholder="John Doe" 
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-slate-100" 
                />
              </div>
              <div className="space-y-1 text-left">
                <label className="text-xs font-bold text-slate-400 uppercase">Email Address</label>
                <input 
                  type="email" 
                  required 
                  placeholder="john@example.com" 
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-slate-100" 
                />
              </div>
            </div>

            <div className="space-y-1 text-left">
              <label className="text-xs font-bold text-slate-400 uppercase">Subject</label>
              <input 
                type="text" 
                required 
                placeholder="Collaboration Opportunity" 
                className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-slate-100" 
              />
            </div>

            <div className="space-y-1 text-left">
              <label className="text-xs font-bold text-slate-400 uppercase">Your Message</label>
              <textarea 
                rows="5" 
                required 
                placeholder="I would love to discuss a job proposal..." 
                className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-slate-100" 
              />
            </div>

            <button 
              type="submit" 
              className="w-full py-4 text-center text-sm font-bold text-white bg-indigo-600 rounded-xl hover:bg-indigo-500 transition-colors shadow-md shadow-indigo-600/10"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}