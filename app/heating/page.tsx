import Image from 'next/image'
import Link from 'next/link'
import furnacepic from '../images/therm.jpg'
import { ArrowRight, Drill, Flame, Gauge, Home, ThermometerSun, TriangleAlert, Wrench } from 'lucide-react'

const systemParts = [
  {
    title: 'Source',
    description: 'The furnace, boiler, or heat pump that creates or captures heat for the home.',
  },
  {
    title: 'Distribution',
    description: 'The ductwork, piping, radiators, or indoor equipment that moves warmth through each space.',
  },
  {
    title: 'Control',
    description: 'The thermostat and controls that tell the system when to turn on, adjust, or shut off.',
  },
]

const warningSigns = [
  'Weak airflow from vents',
  'Uneven heating from room to room',
  'Unusual sounds during startup or operation',
  'Thermostat issues or inaccurate readings',
  'Unexpected increase in energy bills',
  'System running constantly without reaching temperature',
]

const serviceCards = [
  {
    title: 'Heating Install',
    description: 'Replace aging equipment or install a more efficient heating system for dependable comfort.',
    href: '/heating/install',
    icon: Drill,
  },
  {
    title: 'Heating Repair',
    description: 'Troubleshoot weak heat, airflow problems, strange noises, and system breakdowns.',
    href: '/heating/repair',
    icon: Wrench,
  },
]

export default function HeatingPage() {
  return (
    <main className="bg-slate-50 text-slate-950">
      <section className="border-b border-slate-200 bg-white px-6 py-5">
        <nav className="mx-auto flex max-w-6xl items-center gap-3 text-lg font-bold text-slate-700" aria-label="Breadcrumb">
          <Link href="/" className="inline-flex items-center gap-1 text-blue-800 hover:text-blue-950 hover:underline">
            <Home className="h-5 w-5" />
            OnTimeTechnician
          </Link>
          <span className="text-slate-400">/</span>
          <span className=" px-1 py-1 text-blue-950">Heating</span>
        </nav>
      </section>

      <section className="px-6 py-14">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-red-600">Heating service</p>
            <h1 className="mt-3 text-4xl font-bold leading-tight text-slate-950 sm:text-5xl">
              Understanding how your home heating system works.
            </h1>
            <p className="mt-5 leading-8 text-slate-700">
              Central heating depends on three main pieces working together: a heat source, a way to
              distribute that heat, and controls that tell the system when your home needs warmth.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              Furnaces heat air and move it through ducts, boilers heat water for radiant warmth, and
              heat pumps move heat using electricity and refrigerant. Each system is different, but the
              goal is the same: steady, efficient comfort when temperatures drop.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              When the system is healthy, the equipment cycles on and off smoothly, air moves evenly
              through the home, and the thermostat responds without long delays. Problems usually show
              up when one part of that chain starts working harder than it should.
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex justify-center">
              <Image src={furnacepic} alt="Furnace heating system" width={360} height={220} className="h-auto w-full max-w-sm" />
            </div>
            <div className="mt-6 rounded-md bg-blue-950 p-5 text-white">
              <div className="flex items-center gap-3">
                <ThermometerSun className="h-6 w-6 text-red-300" />
                <p className="font-bold">Heating systems work best when airflow, equipment, and controls stay balanced.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8">
            <p className="text-sm font-bold uppercase tracking-wide text-red-600">The core components</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-950">The three parts of central heating</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {systemParts.map((part, index) => (
              <div key={part.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-blue-950 text-white">
                  {index === 0 && <Flame className="h-5 w-5" />}
                  {index === 1 && <Gauge className="h-5 w-5" />}
                  {index === 2 && <ThermometerSun className="h-5 w-5" />}
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-950">{part.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{part.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-red-600">When to call</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-950">Signs your heating system needs service</h2>
            <p className="mt-4 leading-8 text-slate-700">
              Heating problems often start small. If you notice changes in airflow, comfort, noise, or
              energy use, scheduling service early can help prevent a bigger repair later.
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              {warningSigns.map((sign) => (
                <div key={sign} className="flex gap-3 rounded-md bg-slate-50 p-4">
                  <TriangleAlert className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
                  <span className="font-semibold leading-6 text-slate-800">{sign}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-950 px-6 py-14 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center">
            <p className="text-sm font-bold uppercase tracking-wide text-red-300">Heating help</p>
            <h2 className="mt-2 text-3xl font-bold">Choose the service you need</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {serviceCards.map((card) => {
              const Icon = card.icon

              return (
                <Link
                  key={card.href}
                  href={card.href}
                  className="group rounded-lg border border-white/15 bg-white p-6 text-slate-950 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md bg-blue-950 text-white">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{card.title}</h3>
                      <p className="mt-2 leading-7 text-slate-600">{card.description}</p>
                      <div className="mt-4 inline-flex items-center gap-2 font-bold text-blue-800 group-hover:text-blue-950">
                        Learn more
                        <ArrowRight className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}

