import { useEffect, useState } from 'react'
import { Quote } from 'lucide-react'

function Testimonial({ items }) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % items.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [items.length])

  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-[0_20px_50px_rgba(15,23,42,0.06)] sm:p-6 lg:p-8">
      <div className="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-700 sm:text-sm">Testimonials</p>
          <h3 className="mt-2 text-2xl font-black text-slate-900 sm:text-3xl">What Our Clients Say</h3>
        </div>
        <div className="flex items-center gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Show testimonial ${index + 1}`}
              className={`h-2.5 rounded-full transition ${
                active === index ? 'w-8 bg-sky-700' : 'w-2.5 bg-slate-300'
              }`}
              onClick={() => setActive(index)}
            />
          ))}
        </div>
      </div>

      <div className="relative min-h-[330px] sm:min-h-[300px]">
        {items.map((item, index) => (
          <div
            key={item.name}
            className={`absolute inset-0 transition-all duration-500 ${
              active === index ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
            }`}
          >
            <div className="rounded-[1.75rem] bg-slate-50 p-4 sm:p-6">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-sky-100 text-sky-700">
                <Quote className="h-5 w-5" />
              </div>
              <p className="text-base leading-7 text-slate-700 sm:text-lg sm:leading-8">“{item.quote}”</p>

              <div className="mt-8 flex items-center gap-4 border-t border-slate-200 pt-5">
                <img src={item.avatar} alt={item.name} className="h-14 w-14 rounded-full object-cover" />
                <div>
                  <p className="font-bold text-slate-900">{item.name}</p>
                  <p className="text-sm text-slate-500">{item.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonial
