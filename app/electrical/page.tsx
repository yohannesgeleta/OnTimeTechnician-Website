import Link from 'next/link'
import { ArrowRight, Cable, CircuitBoard, Gauge, Home, Plug, TriangleAlert, Wrench, Zap } from 'lucide-react'

const electricityCycle = [
  {
    title: 'Utility line',
    description: 'Power arrives from the outside service connection.',
    icon: Zap,
  },
  {
    title: 'Meter',
    description: 'Usage is measured before power enters the home.',
    icon: Gauge,
  },
  {
    title: 'Breaker panel',
    description: 'Power is divided into protected circuits.',
    icon: CircuitBoard,
  },
  {
    title: 'Wiring',
    description: 'Branch circuits carry power through walls and ceilings.',
    icon: Cable,
  },
  {
    title: 'Devices',
    description: 'Outlets, switches, lights, and appliances use the power.',
    icon: Plug,
  },
]

const warningSigns = [
  'Lights dim or flicker when appliances turn on',
  'Breakers trip repeatedly or will not reset',
  'Outlets, switches, or cover plates feel warm',
  'Buzzing, humming, popping, or sizzling sounds',
  'Burning, fishy, or plastic-like smells near outlets or panels',
  'Discoloration, scorch marks, sparks, or loose outlets',
]

const serviceCards = [
  {
    title: 'Electrical Wiring',
    description: 'Add, replace, or upgrade wiring, outlets, lighting, and electrical connections for safer, more dependable power.',
    href: '/electrical/wiring',
    icon: Cable,
  },
  {
    title: 'Electrical Repair',
    description: 'Troubleshoot tripping breakers, flickering lights, warm outlets, faulty switches, and unsafe electrical behavior.',
    href: '/electrical/repair',
    icon: Wrench,
  },
]

export default function ElectricalPage() {
  return (
    <main className="bg-slate-50 text-slate-950">
      <section className="border-b border-slate-200 bg-white px-6 py-5">
        <nav className="mx-auto flex max-w-6xl items-center gap-3 text-lg font-bold text-slate-700" aria-label="Breadcrumb">
          <Link href="/" className="inline-flex items-center gap-1 text-blue-800 hover:text-blue-950 hover:underline">
            <Home className="h-5 w-5" />
            OnTimeTechnician
          </Link>
          <span className="text-slate-400">/</span>
          <span className="px-1 py-1 text-blue-950">Electrical</span>
        </nav>
      </section>

      <section className="px-4 py-10 sm:px-6 sm:py-14">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-wide text-red-600">Electrical service</p>
          <h1 className="mt-3 max-w-3xl text-3xl font-bold leading-tight text-slate-950 sm:text-5xl">
            Understanding how your home electrical system works.
          </h1>
          <div className="mt-5 max-w-4xl space-y-4 leading-8 text-slate-700">
            <p>
              Your home electrical system moves power from the utility service into the breaker panel,
              then through individual circuits that feed outlets, switches, lighting, appliances, and equipment.
            </p>
            <p>
              A working circuit is a loop. The hot wire carries power out, the device uses that power,
              and the neutral wire carries current back. The ground wire adds protection by giving fault
              current a safer path if something goes wrong.
            </p>
            <p>
              Breakers are there to protect the wiring. If a circuit is overloaded, loose, damaged, or
              undersized for what it serves, the system can show warning signs like heat, flickering,
              buzzing, or repeated breaker trips.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-10 sm:px-6 sm:py-14">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center">
            <p className="text-sm font-bold uppercase tracking-wide text-red-600">Electricity cycle</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-950">How power moves through the home</h2>
            <p className="mx-auto mt-4 max-w-3xl leading-7 text-slate-600">
              Electricity follows a planned path from the utility connection to the devices you use every day.
              The panel and breakers manage where power goes and help protect each circuit.
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <div className="grid gap-4 lg:grid-cols-5">
              {electricityCycle.map((step, index) => {
                const Icon = step.icon

                return (
                  <div key={step.title} className="relative rounded-lg border border-slate-200 bg-white p-5 text-center shadow-sm">
                    {index < electricityCycle.length - 1 && (
                      <div className="absolute -right-4 top-1/2 hidden h-0.5 w-8 -translate-y-1/2 bg-blue-200 lg:block" />
                    )}
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-blue-950 text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 text-lg font-bold text-slate-950">{step.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
                  </div>
                )
              })}
            </div>

            <div className="mt-6 rounded-md bg-blue-950 p-5 text-white">
              <p className="font-bold">Circuit loop: panel &gt; hot wire &gt; device &gt; neutral wire &gt; panel</p>
              <p className="mt-2 leading-7 text-slate-200">
                The ground wire does not normally carry everyday current. It is a safety path that helps
                protect the home when a fault occurs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 sm:py-14">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-red-600">When to call</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-950">Signs your electrical system needs service</h2>
            <p className="mt-4 leading-8 text-slate-700">
              Electrical warning signs should not be ignored. Heat, smells, sounds, sparks, and repeated breaker trips can point
              to loose wiring, overloaded circuits, damaged devices, or unsafe connections.
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

      <section className="bg-blue-950 px-4 py-10 sm:px-6 sm:py-14 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center">
            <p className="text-sm font-bold uppercase tracking-wide text-red-300">Electrical help</p>
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

