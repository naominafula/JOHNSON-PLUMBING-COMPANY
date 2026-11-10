import { Bath, Building2, Droplets, Hammer, House, ShieldCheck, Sparkles, Wrench, Zap } from 'lucide-react'

const serviceData = [
	{
		title: 'Residential Plumbing',
		description:
			'Reliable fixtures, fittings, and plumbing repairs for comfortable, efficient homes.',
		image:
			`${import.meta.env.BASE_URL}images/Expert Plumbing Services by Handyman Unique – Fast & Reliable!.jpeg?auto=format&fit=crop&w=900&q=80`,
		icon: House,
	},
	{
		title: 'Commercial Plumbing',
		description:
			'Scalable plumbing systems and maintenance services built for busy commercial environments.',
		image:
			'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=80',
		icon: Building2,
	},
	{
		title: 'Pipe Installation',
		description:
			'Professional pipe planning and installation for new builds and system upgrades.',
		image:
			'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=80',
		icon: Wrench,
	},
	{
		title: 'Pipe Repair and Replacement',
		description:
			'Thorough diagnosis and repair solutions to prevent leaks, pressure issues, and damage.',
		image:
			'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=80',
		icon: Hammer,
	},
	{
		title: 'Drain Cleaning',
		description:
			'Effective drainage clearing to restore fast flow and eliminate recurring blockages.',
		image:
			'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80',
		icon: Droplets,
	},
	{
		title: 'Bathroom Plumbing',
		description:
			'Complete bathroom plumbing for sinks, toilets, showers, tubs, and fixture upgrades.',
		image:
			'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=900&q=80',
		icon: Bath,
	},
	{
		title: 'Kitchen Plumbing',
		description:
			'Installation and maintenance for kitchen sinks, disposals, supply lines, and plumbing layouts.',
		image:
			`${import.meta.env.BASE_URL}images/Plumbing Contractors for Kitchen Reno BC – Expert Kitchen Plumbing Services.jpeg?auto=format&fit=crop&w=900&q=80`,
		icon: Sparkles,
	},
	{
		title: 'Water Heater Installation',
		description:
			'Efficient installation, replacement, and repair solutions for modern water-heating systems.',
		image:
			`${import.meta.env.BASE_URL}images/Water storage.jpeg?auto=format&fit=crop&w=900&q=80`,
		icon: Wrench,
	},
	{
		title: 'Leak Detection and Repair',
		description:
			'Advanced leak detection to find hidden issues before they cause costly structural damage.',
		image:
			`${import.meta.env.BASE_URL}images/A small water line problem can turn into big….jpeg?auto=format&fit=crop&w=900&q=80`,
		icon: ShieldCheck,
	},
	{
		title: 'Emergency Plumbing Services',
		description:
			'Rapid-response support for urgent leaks, burst pipes, and unexpected plumbing failures.',
		image:
			'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80',
		icon: Zap,
	},
	{
		title: 'Water Tank Installation',
		description:
			'Safe and effective water tank solutions to meet residential and commercial water needs.',
		image:
			`${import.meta.env.BASE_URL}images/Water storage.jpeg?auto=format&fit=crop&w=900&q=80`,
		icon: Droplets,
	},
	{
		title: 'Plumbing Maintenance',
		description:
			'Preventive maintenance programs that reduce breakdowns and protect your systems long term.',
		image:
			`${import.meta.env.BASE_URL}images/Emergency Faucet Repair in Newnan, GA.jpeg?auto=format&fit=crop&w=900&q=80`,
		icon: Wrench,
	},
]

function Services() {
	return (
		<main className="section-shell py-12 sm:py-16 lg:py-20">
			<div className="mb-10 text-center sm:mb-12">
				<p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-700 sm:text-sm">
					Our Services
				</p>
				<h1 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl md:text-5xl">
					Complete plumbing support for homes and businesses
				</h1>
			</div>

			<div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
				{serviceData.map(({ title, description, image, icon: Icon }) => (
					<article
						key={title}
						className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(14,116,144,0.12)]"
					>
						<div className="overflow-hidden">
							<img
								src={image}
								alt={title}
								className="h-56 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-60"
							/>
						</div>
						<div className="p-5 sm:p-6">
							<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
								<Icon className="h-5 w-5" />
							</div>
							<h2 className="text-xl font-bold text-slate-900">{title}</h2>
							<p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
						</div>
					</article>
				))}
			</div>
		</main>
	)
}

export default Services
