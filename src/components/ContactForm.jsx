import { useState } from 'react'

const initialState = {
  fullName: '',
  email: '',
  phone: '',
  service: 'Residential Plumbing',
  message: '',
}

const validators = {
  fullName: (value) => value.trim().length >= 2,
  email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
  phone: (value) => value.trim().length >= 7,
  message: (value) => value.trim().length >= 10,
}

function ContactForm() {
  const [form, setForm] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: '' }))
    setSubmitted(false)
  }

  const validateForm = () => {
    const nextErrors = {}

    Object.keys(validators).forEach((field) => {
      const value = form[field]
      if (field in validators && !validators[field](value)) {
        nextErrors[field] = 'Please provide a valid value.'
      }
    })

    return nextErrors
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validateForm()

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setSubmitted(false)
      return
    }

    setErrors({})
    setSubmitted(true)
    setForm(initialState)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.06)] lg:p-8" noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-slate-700">
            Full Name
          </label>
          <input
            id="fullName"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            placeholder="Your full name"
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:bg-white"
          />
          {errors.fullName && <p className="mt-2 text-sm text-red-500">{errors.fullName}</p>}
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:bg-white"
          />
          {errors.email && <p className="mt-2 text-sm text-red-500">{errors.email}</p>}
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-700">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="(555) 123-4567"
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:bg-white"
          />
          {errors.phone && <p className="mt-2 text-sm text-red-500">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="service" className="mb-2 block text-sm font-medium text-slate-700">
            Service Required
          </label>
          <select
            id="service"
            name="service"
            value={form.service}
            onChange={handleChange}
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:bg-white"
          >
            <option>Residential Plumbing</option>
            <option>Commercial Plumbing</option>
            <option>Pipe Installation</option>
            <option>Leak Detection and Repair</option>
            <option>Water Heater Installation</option>
            <option>Emergency Plumbing</option>
            <option>Drain Cleaning</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your plumbing issue or project."
          className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:bg-white"
        />
        {errors.message && <p className="mt-2 text-sm text-red-500">{errors.message}</p>}
      </div>

      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="btn-primary">
          Submit Request
        </button>

        {submitted && (
          <p className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
            Your request has been submitted successfully.
          </p>
        )}
      </div>
    </form>
  )
}

export default ContactForm
