import React from 'react'
import { Heart, Terminal } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-dark-bg/80 backdrop-blur-sm py-8 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Terminal size={14} className="text-brand-500" />
          <p className="text-xs font-mono text-dark-muted">
            © {new Date().getFullYear()} Jayasurya B
          </p>
        </div>
        <p className="text-xs text-dark-muted flex items-center gap-1">
          Built with <Heart size={12} className="text-red-500" /> using React & Tailwind
        </p>
      </div>
    </footer>
  )
}
