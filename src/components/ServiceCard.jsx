import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function ServiceCard({ title, description, image, icon: Icon }) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(14,116,144,0.12)]">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-xl font-bold text-slate-900">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
        <Link to="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sky-700 transition hover:text-sky-900">
          Learn More
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  )
}

export default ServiceCard
