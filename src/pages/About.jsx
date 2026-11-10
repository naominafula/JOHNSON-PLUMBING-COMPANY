import { Award, Building2, Handshake, HeartHandshake, ShieldCheck, Target, Users } from 'lucide-react'

const values = [
  { title: 'Integrity', description: 'We do the right thing, communicate honestly, and stand behind our work.', icon: Handshake },
  { title: 'Reliability', description: 'Prompt service and dependable results when your systems need attention.', icon: ShieldCheck },
  { title: 'Craftsmanship', description: 'Quality workmanship is at the heart of everything we install and repair.', icon: Award },
]

const timeline = [
  { year: '2008', title: 'Founded', text: 'Johnson Plumbing Company began with a mission to deliver dependable home services in the community.' },
  { year: '2014', title: 'Expanded Services', text: 'We grew from residential repairs into full commercial and emergency plumbing support.' },
  { year: '2020', title: 'Trusted Brand', text: 'Our reputation strengthened through consistent workmanship and customer-first service.' },
]

const team = [
  { name: 'Michael Johnson', role: 'Founder & Lead Plumber', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=80' },
  { name: 'Alicia Reed', role: 'Project Manager', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=700&q=80' },
  { name: 'David Clark', role: 'Service Technician', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=700&q=80' },
]

function About() {
  return (
    <main className="section-shell py-20">
      <section className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">About Us</p>
          <h1 className="mt-3 text-4xl font-black text-slate-900 md:text-5xl">Delivering plumbing solutions with care and precision.</h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Johnson Plumbing Company has been helping homeowners and businesses solve everyday plumbing challenges with dependable service and lasting solutions.
          </p>
          <p className="mt-5 text-base leading-8 text-slate-600">
            From emergency repairs to custom installations, our team combines technical expertise with a strong commitment to customer care. We focus on quality, safety, and transparency in every project.
          </p>
        </div>

        <div className="overflow-hidden rounded-[2rem] shadow-[0_25px_60px_rgba(15,23,42,0.10)]">
          <img
            src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1200&q=80"
            alt="Plumber working on a sink installation"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-[2rem] bg-slate-100 p-6">
          <p className="text-3xl font-black text-slate-900">18+</p>
          <p className="mt-2 text-sm text-slate-600">Years of plumbing experience</p>
        </div>
        <div className="rounded-[2rem] bg-slate-100 p-6">
          <p className="text-3xl font-black text-slate-900">2.4K</p>
          <p className="mt-2 text-sm text-slate-600">Projects completed</p>
        </div>
        <div className="rounded-[2rem] bg-slate-100 p-6">
          <p className="text-3xl font-black text-slate-900">24/7</p>
          <p className="mt-2 text-sm text-slate-600">Emergency support</p>
        </div>
        <div className="rounded-[2rem] bg-slate-100 p-6">
          <p className="text-3xl font-black text-slate-900">98%</p>
          <p className="mt-2 text-sm text-slate-600">Client satisfaction</p>
        </div>
      </section>

      <section className="mt-20 rounded-[2rem] bg-slate-950 p-8 text-white md:p-10">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">Our Story</p>
          <h2 className="mt-2 text-3xl font-black md:text-4xl">Built on trust, service, and craftsmanship</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {timeline.map((item) => (
            <div key={item.year} className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-black tracking-[0.25em] text-sky-300">{item.year}</p>
              <h3 className="mt-4 text-2xl font-bold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 grid gap-8 lg:grid-cols-3">
        {values.map(({ title, description, icon: Icon }) => (
          <div key={title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
          </div>
        ))}
      </section>

      <section className="mt-20 rounded-[2rem] bg-sky-50 p-8 md:p-10">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">Why Customers Trust Us</p>
          <h2 className="mt-2 text-3xl font-black text-slate-900 md:text-4xl">Every job is handled with professionalism and care</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-[1.5rem] bg-white p-5">
            <Building2 className="mb-4 h-8 w-8 text-sky-700" />
            <h3 className="text-lg font-bold text-slate-900">Commercial-grade expertise</h3>
          </div>
          <div className="rounded-[1.5rem] bg-white p-5">
            <Users className="mb-4 h-8 w-8 text-sky-700" />
            <h3 className="text-lg font-bold text-slate-900">Friendly, respectful service</h3>
          </div>
          <div className="rounded-[1.5rem] bg-white p-5">
            <Target className="mb-4 h-8 w-8 text-sky-700" />
            <h3 className="text-lg font-bold text-slate-900">Clear project planning</h3>
          </div>
          <div className="rounded-[1.5rem] bg-white p-5">
            <HeartHandshake className="mb-4 h-8 w-8 text-sky-700" />
            <h3 className="text-lg font-bold text-slate-900">Long-term customer relationships</h3>
          </div>
        </div>
      </section>

      <section className="mt-20">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">Our Team</p>
          <h2 className="mt-2 text-3xl font-black text-slate-900 md:text-4xl">Meet the specialists behind our service</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {team.map((person) => (
            <div key={person.name} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft transition duration-300 hover:-translate-y-1">
              <img src={person.image} alt={person.name} className="h-80 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900">{person.name}</h3>
                <p className="mt-2 text-sm font-medium text-sky-700">{person.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default About
