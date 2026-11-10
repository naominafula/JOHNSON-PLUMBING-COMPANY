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
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=80',
    icon: Droplets,
  },
  {
    title: 'Commercial Plumbing',
    description: 'Reliable service for offices, retail spaces, and commercial facilities requiring efficient, code-compliant systems.',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80',
    icon: Wrench,
  },
  {
    title: 'Emergency Plumbing',
    description: 'Rapid response for urgent leaks, blocked drains, and unexpected failures when you need help fast.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80',
    icon: Clock3,
  },
  {
    title: 'Water Heater Service',
    description: 'Professional installation, maintenance, and repair for tank and tankless water heating systems.',
    image: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=900&q=80',
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
    name: 'Maya Thompson',
    role: 'Homeowner',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80',
    quote: 'Johnson Plumbing arrived the same day and fixed a major leak in our kitchen. The team was professional, respectful, and very tidy.',
  },
  {
    name: 'Daniel Brooks',
    role: 'Property Manager',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    quote: 'Their commercial maintenance service keeps our building running smoothly. The communication and workmanship have been excellent.',
  },
  {
    name: 'Alicia Gomez',
    role: 'Business Owner',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=300&q=80',
    quote: 'We hired them for a full bathroom remodel and the final result was stunning. We would absolutely call them again.',
  },
]

function Home() {
  return (
    <>
      <Hero />

      <main className="section-shell py-20">
        <section className="mb-8">
          <div className="flex flex-wrap items-center justify-center gap-3 rounded-[2rem] border border-slate-200 bg-white p-4 shadow-soft md:gap-5 md:p-6">
            {['Licensed & Insured', 'Same-Day Service', 'Upfront Pricing', 'Family-Owned Business'].map((item) => (
              <div key={item} className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">Our Services</p>
              <h2 className="mt-2 text-3xl font-black text-slate-900 md:text-4xl">Expert Plumbing for Every Need</h2>
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

        <section className="mb-20 rounded-[2rem] bg-slate-100 p-6 md:p-10">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">Why Choose Us</p>
            <h2 className="mt-2 text-3xl font-black text-slate-900 md:text-4xl">Built on Trust, Speed and Craftsmanship</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {features.map(({ title, description, icon: Icon }) => (
              <div key={title} className="rounded-[2rem] bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(14,116,144,0.12)]">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20 rounded-[2rem] bg-sky-50 p-6 md:p-10">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">Our Process</p>
            <h2 className="mt-2 text-3xl font-black text-slate-900 md:text-4xl">A smooth, stress-free plumbing experience</h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {processSteps.map(({ step, title, text }) => (
              <div key={step} className="premium-card rounded-[2rem] bg-white p-6">
                <p className="text-sm font-black tracking-[0.25em] text-sky-700">{step}</p>
                <h3 className="mt-5 text-2xl font-bold text-slate-900">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <Testimonial items={testimonials} />
        </section>

        <section className="mb-20 rounded-[2rem] bg-slate-950 p-8 text-white md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">Need Help Fast?</p>
              <h2 className="mt-2 text-3xl font-black md:text-4xl">Book a plumbing expert for your home or business.</h2>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
              <a href="tel:+15550178" className="btn-primary justify-center">
                Call Now
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                Request a Quote
              </Link>
            </div>
          </div>
        </section>

        <section className="mb-4 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft md:p-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">Service promise</p>
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
