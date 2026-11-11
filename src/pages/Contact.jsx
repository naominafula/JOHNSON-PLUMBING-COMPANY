import { Clock3, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react'
import ContactForm from '../components/ContactForm'

function Contact() {
  return (
    <main className="section-shell py-20">
      <div className="mb-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">Contact Us</p>
        <h1 className="mt-3 text-4xl font-black text-slate-900 md:text-5xl">Request a quote or speak with our team</h1>
      </div>

      <div className="mb-8 rounded-[2rem] bg-sky-50 p-6 text-center md:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">Trusted local experts</p>
        <h2 className="mt-3 text-2xl font-black text-slate-900 md:text-3xl">Fast, reliable plumbing service from a team that puts your comfort first.</h2>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-6">
          <div className="rounded-[2rem] bg-slate-100 p-6 transition duration-300 hover:-translate-y-1">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
              <Phone className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Call us now</h2>
            <a href="tel:+254799323594" className="mt-3 block text-lg font-semibold text-sky-700">+254 799 323 594</a>
            <p className="mt-2 text-sm text-slate-600">Emergency service available 24/7</p>
          </div>

          <div className="rounded-[2rem] bg-slate-100 p-6 transition duration-300 hover:-translate-y-1">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
              <Mail className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Email us</h2>
            <a href="majiTechplumbing@gmail.com" className="mt-3 block text-lg font-semibold text-sky-700">majiTechplumbing@gmail.com</a>
          </div>

          <div className="rounded-[2rem] bg-slate-100 p-6 transition duration-300 hover:-translate-y-1">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
              <MapPin className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Visit our office</h2>
            <p className="mt-3 text-base text-slate-600">Nairobi Wendani</p>
          </div>

          <div className="rounded-[2rem] bg-slate-100 p-6 transition duration-300 hover:-translate-y-1">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
              <Clock3 className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Working Hours</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>Mon - Fri: 8:00 AM - 6:00 PM</li>
              <li>Saturday: 9:00 AM - 4:00 PM</li>
              <li>Sunday: Emergency service only</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <ContactForm />

          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft">
            <div className="bg-slate-900 p-4 text-white">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-sky-400" />
                <span className="font-semibold">Emergency Contact</span>
              </div>
            </div>
            <div className="h-72 w-full bg-[radial-gradient(circle,_#dbeafe_0%,_#e2e8f0_45%,_#cbd5e1_100%)] p-6">
              <div className="flex h-full items-center justify-center rounded-[1.5rem] border border-dashed border-slate-300 bg-white/60 text-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">Location</p>
                  <p className="mt-3 text-xl font-black text-slate-900">Service Zone</p>
                  <p className="mt-2 text-sm text-slate-600">Serving homes and businesses across the metro area</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Contact
