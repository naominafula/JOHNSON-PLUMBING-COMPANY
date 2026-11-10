import { useMemo, useState } from 'react'
import { imageUrl } from '../utils/media'

const projectData = [
  { title: 'Modern Villa Plumbing Upgrade', category: 'Residential', image: imageUrl('929078598152434470.jpeg'), description: 'Complete re-piping and fixture installation for a luxury residential property.' },
  { title: 'Office Water System Retrofit', category: 'Commercial', image: imageUrl('752312312803382932.jpeg'), description: 'Commercial water distribution upgrade for a busy office building.' },
  { title: 'Spa Bathroom Installation', category: 'Bathroom', image: imageUrl('Is a Multi-Function Shower Head Worth It_ 🚿 _ Pros, Cons & Top Picks!.jpeg'), description: 'New bathroom plumbing layout featuring tub, shower, and stone fixtures.' },
  { title: 'Kitchen Renovation Plumbing', category: 'Kitchen', image: imageUrl('Undermount Sink Installation & Support Guide Marietta.jpeg'), description: 'Full kitchen plumbing update, including sink, dishwasher, and supply changes.' },
  { title: 'Pipe Repair in Apartment Block', category: 'Pipe Repair', image: imageUrl('How Much Does It Cost To Replace Your Polybutylene Pipes_.jpeg'), description: 'Fast and efficient pipe replacement to restore water pressure and prevent future damage.' },
  { title: 'Water Tank System Installation', category: 'Water System', image: imageUrl('O aumento do consumo de água, as frequentes crises….jpeg'), description: 'Water tank installation designed for consistent household supply and efficiency.' },
]

const filters = ['All', 'Residential', 'Commercial', 'Bathroom', 'Kitchen', 'Pipe Repair', 'Water System']

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projectData
    return projectData.filter((project) => project.category === activeFilter)
  }, [activeFilter])

  return (
    <main className="section-shell py-20">
      <div className="mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-700">Our Work</p>
        <h1 className="mt-3 text-4xl font-black text-slate-900 md:text-5xl">Recent plumbing projects and completed work</h1>
      </div>

      <div className="mb-8 flex flex-wrap justify-center gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              activeFilter === filter
                ? 'bg-sky-700 text-white shadow-lg shadow-sky-200'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project) => (
          <article key={project.title} className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(14,116,144,0.12)]">
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                onError={(event) => {
                  event.currentTarget.src = 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=80'
                }}
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
              />
              <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-slate-700">
                {project.category}
              </span>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold text-slate-900">{project.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{project.description}</p>
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}

export default Projects
