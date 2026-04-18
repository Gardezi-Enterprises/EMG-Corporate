import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { label: 'Services', to: '/services-solutions' },
  { label: 'Industries', to: '/industry-specific-ai' },
  { label: 'Portfolio', to: '/case-studies' },
  { label: 'About', to: '/about-us' },
  { label: 'Blog', to: '/blog-insights' },
]

function Header() {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-lg w-full top-0 sticky z-50 shadow-sm shadow-cyan-900/5">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 h-20 relative">
        <Link
          className="text-xl font-bold tracking-tighter text-slate-900 dark:text-white font-['Space_Grotesk'] font-medium tracking-tight"
          to="/homepage"
        >
          LUMINA_AI
        </Link>

        <div className="hidden md:flex items-center space-x-8 font-['Space_Grotesk'] font-medium tracking-tight">
          {navItems.map((item) => (
            <Link
              key={item.to}
              className={
                isActive(item.to)
                  ? 'text-cyan-600 dark:text-cyan-400 font-bold border-b-2 border-cyan-500 pb-1 px-3 py-2 opacity-80 scale-95 transition-transform'
                  : 'text-slate-600 dark:text-slate-400 hover:text-cyan-500 transition-colors hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-all duration-300 px-3 py-2 rounded'
              }
              to={item.to}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link
            className="bg-primary text-on-primary font-body font-medium px-5 py-2.5 rounded hover:bg-primary/90 transition-colors"
            to="/contact"
          >
            Consult AI
          </Link>
        </div>

        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 h-[1px] w-full absolute bottom-0 left-0" />
      </div>
    </nav>
  )
}

export default Header
