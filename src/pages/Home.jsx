import {
  ArrowRight,
  BadgeCheck,
  Clock3,
  Droplets,
  ShieldCheck,
  Sparkles,
  Star,
  Wrench,
  Zap,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import Testimonial from '../components/Testimonial'

const services = [
  {
    title: 'Residential Plumbing',
    description: 'Complete plumbing solutions for homes, including fixtures, piping, and repairs with minimal disruption.',
    image: `${import.meta.env.BASE_URL}images/WhatsApp Image 2026-11-10 at 11.13.16 AM.jpeg?auto=format&fit=crop&w=900&q=80`,
    icon: Droplets,
  },
  {
    title: 'Commercial Plumbing',
    description: 'Reliable service for offices, retail spaces, and commercial facilities requiring efficient, code-compliant systems.',
    image: `${import.meta.env.BASE_URL}images/Common Commercial Plumbing Issues and How to Fix Them.jpeg?auto=format&fit=crop&w=900&q=80`,
    icon: Wrench,
  },
  {
    title: 'Emergency Plumbing',
    description: 'Rapid response for urgent leaks, blocked drains, and unexpected failures when you need help fast.',
    image: `${import.meta.env.BASE_URL}images/WhatsApp Image 2026-11-10 at 11.13.16 AM.jpeg?auto=format&fit=crop&w=900&q=80`,
    icon: Clock3,
  },
  {
    title: 'Water Heater Service',
    description: 'Professional installation, maintenance, and repair for tank and tankless water heating systems.',
    image: `${import.meta.env.BASE_URL}images/Home Efficiency Enhanced Through Tankless Water Heater Installation by Bedrock Plumbing & Drain C_.jpeg?auto=format&fit=crop&w=900&q=80`,
    icon: Sparkles,
  },
]

const features = [
  {
    title: 'Licensed & Certified Professionals',
    description: 'Our expert plumbers are trained, insured, and committed to quality workmanship on every job.',
    icon: ShieldCheck,
  },
  {
    title: 'Transparent Pricing',
    description: 'No hidden costs or surprise add-ons. We provide honest estimates before we begin the work.',
    icon: BadgeCheck,
  },
  {
    title: 'Guaranteed Satisfaction',
    description: 'Every installation and repair is backed by careful attention to detail and lasting results.',
    icon: Star,
  },
]

const processSteps = [
  { step: '01', title: 'Book a Visit', text: 'Tell us what is happening and we schedule a time that works around your day.' },
  { step: '02', title: 'Inspect & Diagnose', text: 'We assess the issue, explain the root cause, and recommend the best fix.' },
  { step: '03', title: 'Repair & Finish', text: 'Our team completes the work quickly, cleanly, and with strict quality checks.' },
]

const testimonials = [
  {
    name: 'Naomi Nafula',
    role: 'Homeowner',
    avatar: `${import.meta.env.BASE_URL}images/WhatsApp Image 2026-11-10 at 11.22.33 AM.jpeg?auto=format&fit=crop&w=300&q=80`,
    quote: 'Johnson Plumbing arrived the same day and fixed a major leak in our kitchen. The team was professional, respectful, and very tidy.',
  },
  {
    name: 'Ham Phillips',
    role: 'Property Manager',
    avatar: `${import.meta.env.BASE_URL}images/WhatsApp Image 2026-11-10 at 11.30.31 AM.jpeg?auto=format&fit=crop&w=300&q=80`,
    quote: 'Their commercial maintenance service keeps our building running smoothly. The communication and workmanship have been excellent.',
  },
  {
    name: 'John Bush',
    role: 'Business Owner',
    avatar: `${import.meta.env.BASE_URL}images/WhatsApp Image 2026-11-10 at 11.13.16 AM.jpeg?auto=format&fit=crop&w=300&q=80`,
    quote: 'We hired them for a full bathroom remodel and the final result was stunning. We would absolutely call them again.',
  },
  {
    name: 'Tisha Muthoni',
    role: 'Homeowner',
    avatar: `${import.meta.env.BASE_URL}images/687150855681385903.jpeg?auto=format&fit=crop&w=300&q=80`,
    quote: 'I had a plumbing emergency late at night, and they responded quickly and fixed the issue. I felt safe and well taken care of.',
  },
  {
    name: 'David Clark',
    role: 'Homeowner',
    avatar: `${import.meta.env.BASE_URL}images/951244752535308854.jpeg?auto=format&fit=crop&w=300&q=80`,
    quote: 'The team was courteous, efficient, and left the work area spotless. I highly recommend their services.',
  },
  {
    name: 'Alicia Reed',
    role: 'Client',
    avatar: `${import.meta.env.BASE_URL}images/611645193176191588.jpeg?auto=format&fit=crop&w=300&q=80`,
    quote: 'They installed a new water heater for our office, and the process was seamless. The technician explained everything clearly.',
  },
]

function Home() {
  return (
    <>
      <Hero />

      <main className="section-shell py-12 sm:py-16 lg:py-20">
        <section className="mb-8">
          <div className="flex flex-wrap items-center justify-center gap-2 rounded-[2rem] border border-slate-200 bg-white p-3 shadow-soft sm:gap-3 md:gap-5 md:p-6">
            {['Licensed & Insured', 'Same-Day Service', 'Upfront Pricing', 'Family-Owned Business'].map((item) => (
              <div key={item} className="rounded-full bg-slate-100 px-3 py-2 text-xs font-medium text-slate-700 sm:text-sm">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 sm:mb-20">
          <div className="mb-8 flex flex-col gap-3 md:mb-10 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-700 sm:text-sm">Our Services</p>
              <h2 className="mt-2 text-2xl font-black text-slate-900 sm:text-3xl md:text-4xl">Expert Plumbing for Every Need</h2>
            </div>
            <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-sky-700 transition hover:text-sky-900">
              View all services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </section>

        <section className="mb-16 rounded-[2rem] bg-slate-100 p-5 sm:p-6 md:mb-20 md:p-10">
          <div className="mb-8 text-center sm:mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-700 sm:text-sm">Why Choose Us</p>
            <h2 className="mt-2 text-2xl font-black text-slate-900 sm:text-3xl md:text-4xl">Built on Trust, Speed and Craftsmanship</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {features.map(({ title, description, icon: Icon }) => (
              <div key={title} className="rounded-[2rem] bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(14,116,144,0.12)] sm:p-6">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 rounded-[2rem] bg-sky-50 p-5 sm:p-6 md:mb-20 md:p-10">
          <div className="mb-8 text-center sm:mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-700 sm:text-sm">Our Process</p>
            <h2 className="mt-2 text-2xl font-black text-slate-900 sm:text-3xl md:text-4xl">A smooth, stress-free plumbing experience</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {processSteps.map(({ step, title, text }) => (
              <div key={step} className="premium-card rounded-[2rem] bg-white p-5 sm:p-6">
                <p className="text-sm font-black tracking-[0.25em] text-sky-700">{step}</p>
                <h3 className="mt-5 text-2xl font-bold text-slate-900">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 sm:mb-20">
          <Testimonial items={testimonials} />
        </section>

        <section className="mb-4 rounded-[2rem] bg-slate-950 p-5 text-white sm:p-8 md:p-12">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-300 sm:text-sm">Need Help Fast?</p>
              <h2 className="mt-2 text-2xl font-black sm:text-3xl md:text-4xl">Book a plumbing expert for your home or business.</h2>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <a href="tel:+254799323594" className="btn-primary justify-center">
                Call Now
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                Request a Quote
              </Link>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-soft sm:p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-700 sm:text-sm">Service promise</p>
              <h3 className="mt-3 text-2xl font-black text-slate-900">Quality you can count on.</h3>
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4">
              <Zap className="h-8 w-8 text-orange-500" />
              <div>
                <p className="font-bold text-slate-900">Fast response</p>
                <p className="text-sm text-slate-500">Emergency help when every minute matters.</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4">
              <ShieldCheck className="h-8 w-8 text-sky-700" />
              <div>
                <p className="font-bold text-slate-900">Clean workmanship</p>
                <p className="text-sm text-slate-500">Respectful service with tidy, reliable results.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
