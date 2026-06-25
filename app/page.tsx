import Image from 'next/image'
import Link from 'next/link'
import { AirVent, ArrowRight, CalendarCheck, Clock, ShieldCheck, Star, ThermometerSun, Wind, Zap } from 'lucide-react'
import electric from './images/wiring2.jpg'
import house from './images/house.jpg'
import cooling from './images/outdoor_fan.jpg'
import wiring from './images/wiring.jpg'

const services = [
  {
    title: 'Heating',
    description: 'Furnace repairs, heat pump service, seasonal tune-ups, and new heating installations.',
    href: '/heating',
    icon: ThermometerSun,
  },
  {
    title: 'Cooling',
    description: 'AC maintenance, diagnostics, repairs, and efficient cooling system installations.',
    href: '/cooling',
    icon: Wind,
  },
  {
    title: 'Electrical',
    description: 'Panel upgrades, wiring, lighting, troubleshooting, and smart home electrical work.',
    href: '/electrical',
    icon: Zap,
  },
  {
    title: 'Indoor Air Quality',
    description: 'Filtration, humidity control, air purification, and comfort-focused air quality solutions.',
    href: '/iaq',
    icon: AirVent,
  },
]

const highlights = [
  {
    title: 'On-time service',
    description: 'Clear scheduling and dependable arrival windows for every appointment.',
    icon: Clock,
  },
  {
    title: 'Family-owned care',
    description: 'Local technicians focused on long-term trust, not one-time sales pressure.',
    icon: ShieldCheck,
  },
  {
    title: 'Easy scheduling',
    description: 'Pick an appointment date online and choose the time that works for your home.',
    icon: CalendarCheck,
  },
]

export default function Home() {
  return (
    <main className="bg-slate-50 text-slate-950">
      {/*Top part */}
      <section className="relative overflow-hidden bg-blue-950">
        <div className="absolute inset-0">
          <Image
            src={house}
            alt="Comfortable home served by OnTimeTechnician"
            fill
            priority
            placeholder="blur"
            className="object-cover opacity-35"
          />
        </div>

        <div className="relative mx-auto grid min-h-[620px] max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-3xl text-white">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold">
              <Star className="h-4 w-4 text-red-400" />
              Serving Central Pennsylvania homes and businesses
            </div>

            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Reliable HVAC and electrical service when your home needs it.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100">
              OnTimeTechnician helps keep your property comfortable, safe, and powered with heating,
              cooling, electrical, and indoor air quality solutions from a local family-owned team.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact/schedule"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-red-600 px-6 py-3 font-bold text-white transition hover:bg-red-700"
              >
                Schedule service
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/contact/message"
                className="inline-flex items-center justify-center rounded-md border border-white/40 bg-white/10 px-6 py-3 font-bold text-white transition hover:bg-white hover:text-blue-950"
              >
                Request help
              </Link>
            </div>
          </div>

          <div className="hidden justify-end lg:flex">
            <div className="rounded-lg border border-white/20 bg-white p-6 shadow-2xl">
              <Image
                src={electric}
                alt="HVAC service equipment"
                placeholder="blur"
                className="h-auto w-[360px]"
              />
              <div className="mt-5 border-t border-slate-200 pt-5">
                <p className="text-sm font-semibold uppercase text-blue-800">Fast support</p>
                <p className="mt-1 text-2xl font-bold text-slate-950">Heating, cooling, and electrical repairs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-10">
        <div className="mx-auto grid max-w-7xl gap-4 px-6 md:grid-cols-3">
          {highlights.map((item) => {
            const Icon = item.icon

            return (
              <div key={item.title} className="flex gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-blue-100 text-blue-800">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-950">{item.title}</h2>
                  <p className="mt-1 leading-6 text-slate-600">{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-red-600">Complete home service</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
            One team for comfort, safety, and dependable repairs.
          </h2>
          <p className="mt-5 leading-8 text-slate-700">
            Whether your furnace stops working, your AC needs a seasonal tune-up, or your electrical
            system needs an upgrade, our technicians bring practical solutions and straightforward
            communication to every job.
          </p>

          <Link
            href="/about"
            className="mt-7 inline-flex items-center gap-2 font-bold text-blue-800 hover:text-blue-950 hover:underline"
          >
            Learn about OnTimeTechnician
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon

            return (
              <Link
                key={service.title}
                href={service.href}
                className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
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
      </section>

      <section className="bg-slate-100 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-3">
          <div className="relative min-h-[260px] overflow-hidden rounded-lg lg:col-span-2">
            <Image
              src={cooling}
              alt="Air conditioning service"
              fill
              placeholder="blur"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center rounded-lg bg-blue-950 p-8 text-white">
            <p className="text-sm font-bold uppercase text-red-300">Schedule online</p>
            <h2 className="mt-3 text-3xl font-bold">Choose a date and time that works for you.</h2>
            <p className="mt-4 leading-7 text-slate-200">
              Our scheduling page helps you pick an available appointment slot without waiting for a
              phone call.
            </p>
            <Link
              href="/contact/schedule"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-md bg-red-600 px-5 py-3 font-bold text-white transition hover:bg-red-700"
            >
              Book an appointment
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="relative min-h-[320px] overflow-hidden rounded-lg">
          <Image
            src={wiring}
            alt="Electrical wiring service"
            fill
            placeholder="blur"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-sm font-bold uppercase tracking-wide text-red-600">Built for everyday reliability</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
            Practical service for the systems your property depends on.
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-white p-5">
              <h3 className="font-bold text-slate-950">Residential</h3>
              <p className="mt-2 leading-6 text-slate-600">
                Repairs, replacements, tune-ups, and upgrades for comfort and safety at home.
              </p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-5">
              <h3 className="font-bold text-slate-950">Commercial</h3>
              <p className="mt-2 leading-6 text-slate-600">
                Dependable service for small businesses, offices, and local properties.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

