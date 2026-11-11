import { ArrowUpRight, Clock3, Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

const footerLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
]

function Footer() {
  return (
    <footer className="mt-20 bg-slate-950 text-slate-200">
      <div className="section-shell py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-500/15 text-lg font-black text-sky-300">
                MJ
              </div>
              <div>
                <p className="text-lg font-black uppercase tracking-wide text-white">MajiTech Plumbing Solution</p>
                <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-slate-400">majitech.plumbing</p>
              </div>
            </div>
            <p className="text-sm leading-7 text-slate-300">
              Trusted plumbing specialists bringing dependable repairs, installations, and maintenance to homes and businesses.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Quick Links</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              {footerLinks.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="inline-flex items-center gap-2 transition hover:text-white">
                    <ArrowUpRight className="h-3.5 w-3.5" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Contact Info</h3>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-sky-400" />
                <span>+254 799 323 594</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-sky-400" />
                <span>majiTechplumbing@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-sky-400" />
                <span>Nairobi Wendani</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Opening Hours</h3>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <Clock3 className="h-4 w-4 text-sky-400" />
                <span>Mon - Fri: 8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock3 className="h-4 w-4 text-sky-400" />
                <span>Sat: 9:00 AM - 4:00 PM</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock3 className="h-4 w-4 text-sky-400" />
                <span>Emergency 24/7</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-sm text-slate-400">
          © 2026 MajiTech Plumbing Solution. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
