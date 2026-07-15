import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-900 bg-white dark:bg-dark-bg py-8 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-slate-400">
          © {new Date().getFullYear()} Jayasurya B. All rights reserved.
        </p>
        <p className="text-xs text-slate-400">
          Designed with ❤️ using React & Tailwind.
        </p>
      </div>
    </footer>
  )
}