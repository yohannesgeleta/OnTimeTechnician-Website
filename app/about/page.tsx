import Image from 'next/image'
import Link from 'next/link'
import house from '../images/house.jpg'
import { AirVent, ArrowRight, CheckCircle2, Clock, Flame, Languages, MapPin, Plug, ShieldCheck, Snowflake, WalletCards } from 'lucide-react'

const services = [
  {
    title: 'Heating',
    href: '/heating',
    description: 'Heat pump service, furnace repair, seasonal maintenance, and efficient heating installations.',
    icon: Flame,
  },
  {
    title: 'Cooling',
    href: '/cooling',
    description: 'AC diagnostics, tune-ups, repairs, and cooling replacements for humid Pennsylvania summers.',
    icon: Snowflake,
  },
  {
    title: 'Electrical',
    href: '/electrical',
    description: 'Wiring, panel upgrades, lighting, troubleshooting, and smart home electrical work.',
    icon: Plug,
  },
  {
    title: 'Indoor Air Quality',
    href: '/iaq',
    description: 'Filtration, humidity control, UV purification, and cleaner air solutions for your property.',
    icon: AirVent,
  },
]

const values = [
  'Local, family-owned service',
  'Straightforward communication',
  'Respectful work in your home or business',
  'Heating, cooling, electrical, and air quality support',
]

export default function About() {
  return (
    <main className="bg-slate-50 text-slate-950">
      <section className="bg-blue-950 px-6 py-14 text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-red-300">About OnTimeTechnician</p>
            <h1 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl">
              Local service with the kind of care you can feel at home.
            </h1>
            <p className="mt-5 max-w-2xl leading-8 text-slate-200">
              We help Central Pennsylvania homeowners and businesses stay comfortable, safe, and powered
              with reliable HVAC, electrical, and indoor air quality service.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact/schedule"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-red-600 px-5 py-3 font-bold text-white transition hover:bg-red-700"
              >
                Schedule service
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact/message"
                className="inline-flex items-center justify-center rounded-md border border-white/35 px-5 py-3 font-bold text-white transition hover:bg-white hover:text-blue-950"
              >
                Contact us
              </Link>
            </div>
          </div>

          <div className="relative min-h-[320px] overflow-hidden rounded-lg shadow-2xl ring-1 ring-white/20">
            <Image
              src={house}
              alt="A home served by OnTimeTechnician"
              fill
              priority
              placeholder="blur"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-red-600">Family-owned and local</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
              Built around dependability, not corporate runaround.
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-slate-700">
            <p>
              At OnTimeTechnician, we take pride in serving our neighbors across Central Pennsylvania.
              Over the last five years, we have worked to provide practical solutions, honest service,
              and dependable support for homes and businesses.
            </p>
            <p>
              Our advantage as a family-run business is simple: we answer to our customers and our
              community. We bring modern technical skill, but we keep the service personal, respectful,
              and easy to understand.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-red-600">What we do</p>
              <h2 className="mt-3 text-3xl font-bold text-slate-950">Services for year-round comfort</h2>
            </div>
            <Link href="/contact/schedule" className="font-bold text-blue-800 hover:text-blue-950 hover:underline">
              Book an appointment
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon

              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-blue-950 text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-slate-950">{service.title}</h3>
                  <p className="mt-3 leading-6 text-slate-600">{service.description}</p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-lg bg-blue-950 p-8 text-white">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-7 w-7 text-red-300" />
              <h2 className="text-3xl font-bold">Why customers call us</h2>
            </div>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {values.map((value) => (
                <div key={value} className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-red-300" />
                  <span className="leading-7 text-slate-100">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-950">Company details</h2>
            <div className="mt-6 space-y-5">
              <div className="flex gap-4">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-blue-800" />
                <div>
                  <div className="font-bold text-slate-950">Business hours</div>
                  <div className="text-slate-700">9am-7pm</div>
                </div>
              </div>
              <div className="flex gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-blue-800" />
                <div>
                  <div className="font-bold text-slate-950">Areas served</div>
                  <div className="text-slate-700">Lancaster, Lititz, New Holland, Ephrata, Bird-in-Hand, and nearby communities.</div>
                </div>
              </div>
              <div className="flex gap-4">
                <Languages className="mt-1 h-5 w-5 shrink-0 text-blue-800" />
                <div>
                  <div className="font-bold text-slate-950">Languages</div>
                  <div className="text-slate-700">English, Amharic, Arabic</div>
                </div>
              </div>
              <div className="flex gap-4">
                <WalletCards className="mt-1 h-5 w-5 shrink-0 text-blue-800" />
                <div>
                  <div className="font-bold text-slate-950">Payment options</div>
                  <div className="text-slate-700">Mastercard, cash, and check</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
