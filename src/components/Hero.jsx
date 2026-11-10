import { ArrowRight, CheckCircle, Gauge, ShieldCheck, Wrench } from 'lucide-react'
import { Link } from 'react-router-dom'

const highlights = [
	{ label: 'Years Experience', value: '18+' },
	{ label: 'Projects Completed', value: '2.4K' },
	{ label: 'Customer Satisfaction', value: '98%' },
]

const heroImage = `${import.meta.env.BASE_URL}images/WhatsApp Image 2026-11-10 at 11.13.16 AM.jpeg?auto=format&fit=crop&w=1600&q=80`

function Hero() {
	return (
		<section className="relative overflow-hidden bg-slate-900">
			<div
				className="absolute inset-0 bg-cover bg-center opacity-50"
				style={{
					backgroundImage: `url('${heroImage}')`,
				}}
			/>
			<div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-sky-900/60" />

			<div className="section-shell relative py-12 sm:py-16 lg:py-28">
				<div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
					<div>
						<div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs text-sky-100 backdrop-blur-sm sm:text-sm">
							<ShieldCheck className="h-4 w-4 text-orange-400" />
							Licensed • Insured • Trusted Since 2025
						</div>

						<h1 className="max-w-xl text-white sm:text-5xl lg:text-6xl">
							Reliable Plumbing Solutions You Can Trust.
						</h1>

						<p className="mt-5 max-w-lg text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
							From emergency repairs to full system installations, we deliver
							dependable plumbing expertise for homes, offices, and commercial
							spaces.
						</p>

						<div className="mt-7 flex flex-col gap-3 sm:flex-row">
							<Link to="/contact" className="btn-primary">
								Get a Free Quote
								<ArrowRight className="ml-2 h-4 w-4" />
							</Link>
							<Link
								to="/services"
								className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 sm:px-6"
							>
								Explore Our Services
							</Link>
						</div>

						<div className="mt-8 grid gap-3 sm:grid-cols-3 sm:gap-5">
							{highlights.map((item) => (
								<div
									key={item.label}
									className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition duration-300 hover:-translate-y-1"
								>
									<p className="text-xl font-black text-white sm:text-2xl">
										{item.value}
									</p>
									<p className="mt-1 text-xs text-slate-200 sm:text-sm">
										{item.label}
									</p>
								</div>
							))}
						</div>
					</div>

					<div className="relative">
						<div className="rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-xl sm:p-4">
							<div className="overflow-hidden rounded-[1.5rem]">
								<img
									src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=80"
									alt="Professional plumber servicing a kitchen sink"
									className="h-[280px] w-full object-cover sm:h-[340px] lg:h-[480px]"
								/>
							</div>
							<div className="mt-4 grid gap-3 sm:grid-cols-3">
								<div className="rounded-2xl bg-sky-50 p-3 sm:p-4">
									<Gauge className="mb-2 h-5 w-5 text-sky-700" />
									<p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500 sm:text-[11px]">
										Fast Response
									</p>
									<p className="mt-2 text-lg font-black text-slate-900 sm:text-xl">
										1 Hour
									</p>
								</div>
								<div className="rounded-2xl bg-orange-50 p-3 sm:p-4">
									<Wrench className="mb-2 h-5 w-5 text-orange-500" />
									<p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500 sm:text-[11px]">
										Service
									</p>
									<p className="mt-2 text-lg font-black text-slate-900 sm:text-xl">
										24/7
									</p>
								</div>
								<div className="rounded-2xl bg-emerald-50 p-3 sm:p-4">
									<CheckCircle className="mb-2 h-5 w-5 text-emerald-600" />
									<p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500 sm:text-[11px]">
										Warranty
									</p>
									<p className="mt-2 text-lg font-black text-slate-900 sm:text-xl">
										12 Mo
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero
