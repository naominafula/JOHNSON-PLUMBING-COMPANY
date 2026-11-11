import { Menu, Phone, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="section-shell">
        <div className="flex h-20 items-center justify-between gap-3">
          <Link to="/" className="flex min-w-0 items-center gap-3" aria-label="Johnson Plumbing Company home">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-500 to-sky-700 text-lg font-black text-white shadow-lg shadow-sky-200">
              MJ
            </div>
            <div className="min-w-0">
              <p className="text-base font-black uppercase tracking-wide text-slate-900 sm:text-lg">MajiTech plumbing Solution</p>
              <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-slate-500 sm:text-[10px]">majitech.plumbing</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition ${
                    isActive ? 'text-sky-700' : 'text-slate-600 hover:text-slate-900'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href="tel:+254799323594"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-sky-200 hover:text-sky-700"
            >
              <Phone className="h-4 w-4" />
              0799323594
            </a>
            <Link to="/contact" className="btn-primary">
              Get a Quote
            </Link>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-700 lg:hidden"
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isOpen && (
          <div className="space-y-3 border-t border-slate-200 py-4 lg:hidden">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                    isActive ? 'bg-sky-50 text-sky-700' : 'text-slate-700 hover:bg-slate-50'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <a
              href="tel:+254799323594"
              className="block rounded-xl border border-slate-200 px-3 py-2.5 text-sm font-medium text-slate-700"
            >
              Call: 0799323594
            </a>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="btn-primary w-full">
              Get a Quote
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
