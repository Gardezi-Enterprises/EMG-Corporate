function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 w-full py-12 border-t-0 bg-surface-container-low font-['Inter'] text-sm text-slate-500 dark:text-slate-400">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto px-6">
        <div className="md:col-span-1">
          <div className="font-['Space_Grotesk'] font-bold text-lg text-slate-900 dark:text-white mb-4">
            LUMINA_AI
          </div>
          <p>© 2024 Lumina AI Architecture. Intelligence Defined.</p>
        </div>

        <div className="md:col-span-3 flex flex-wrap gap-6 justify-start md:justify-end">
          <a className="text-slate-500 hover:text-cyan-500 hover:translate-x-1 transition-transform duration-200" href="#">
            Privacy Policy
          </a>
          <a className="text-slate-500 hover:text-cyan-500 hover:translate-x-1 transition-transform duration-200" href="#">
            Terms of Service
          </a>
          <a className="text-slate-500 hover:text-cyan-500 hover:translate-x-1 transition-transform duration-200" href="#">
            Security
          </a>
          <a className="text-slate-500 hover:text-cyan-500 hover:translate-x-1 transition-transform duration-200" href="#">
            Careers
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
