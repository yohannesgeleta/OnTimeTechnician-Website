import Image from 'next/image'
import Link from 'next/link'
import cooling from '../images/cooling.jpg'
import { ArrowRight, CheckCircle2, Drill, Fan, Gauge, Home, Snowflake, TriangleAlert, Wrench } from 'lucide-react'

const indoorParts = [
  {
    title: 'Evaporator coil',
    description: 'Warm indoor air passes across this cold coil. Refrigerant inside the coil absorbs heat from the air, which is what makes the air feel cooler before it returns to the rooms.',
  },
  {
    title: 'Blower fan',
    description: 'The blower pulls warm air through the return vents, pushes it over the evaporator coil, and sends cooled air back through the supply vents.',
  },
  {
    title: 'Air filter and return path',
    description: 'The filter and return ductwork help keep air moving through the system. Restricted airflow can reduce comfort, freeze the coil, and make the system work harder.',
  },
]

const outdoorParts = [
  {
    title: 'Compressor',
    description: 'The compressor pressurizes warm refrigerant gas from inside the home, raising its temperature so the heat can be released outdoors.',
  },
  {
    title: 'Condenser coil',
    description: 'Hot refrigerant moves through the outdoor coil, where heat transfers into the outside air and the refrigerant begins turning back into a liquid.',
  },
  {
    title: 'Condenser fan',
    description: 'The outdoor fan pulls air across the condenser coil, helping carry heat away from the refrigerant so the cooling cycle can continue.',
  },
]

const warningSigns = [
  'Weak airflow from vents',
  'Air feels lukewarm instead of cool',
  'Ice forming on the indoor or outdoor unit',
  'Strange sounds or foul odors',
  'Short cycling or frequent starts and stops',
  'Unexpected increase in energy bills',
]

const serviceCards = [
  {
    title: 'Cooling Install',
    description: 'Replace aging equipment or install a modern cooling system for reliable comfort and better efficiency.',
    href: '/cooling/install',
    icon: Drill,
  },
  {
    title: 'Cooling Repair',
    description: 'Troubleshoot weak airflow, warm air, frozen coils, short cycling, and AC system breakdowns.',
    href: '/cooling/repair',
    icon: Wrench,
  },
]

export default function CoolingPage() {
  return (
    <main className="bg-slate-50 text-slate-950">
      <section className="border-b border-slate-200 bg-white px-6 py-5">
        <nav className="mx-auto flex max-w-6xl items-center gap-3 text-lg font-bold text-slate-700" aria-label="Breadcrumb">
          <Link href="/" className="inline-flex items-center gap-1 text-blue-800 hover:text-blue-950 hover:underline">
            <Home className="h-5 w-5" />
            OnTimeTechnician
          </Link>
          <span className="text-slate-400">/</span>
          <span className="px-1 py-1 text-blue-950">Cooling</span>
        </nav>
      </section>

      <section className="px-6 py-14">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
            <div className="relative min-h-[320px] overflow-hidden rounded-md">
              <Image src={cooling} alt="Air conditioning cooling system" fill placeholder="blur" className="object-cover" />
            </div>
            <div className="mt-6 rounded-md bg-blue-950 p-5 text-white">
              <div className="flex items-center gap-3">
                <Snowflake className="h-6 w-6 text-red-300" />
                <p className="font-bold">Cooling systems work best when airflow, refrigerant, coils, and controls stay balanced.</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-red-600">Cooling service</p>
            <h1 className="mt-3 text-4xl font-bold leading-tight text-slate-950 sm:text-5xl">
              Understanding how your home cooling system works.
            </h1>
            <p className="mt-5 leading-8 text-slate-700">
              A cooling system does not simply create cold air. It lowers the temperature in your home
              by removing heat from indoor air and moving that heat outside.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              Central air conditioning uses refrigerant, an indoor coil, a blower fan, a compressor,
              and an outdoor condenser to repeat this heat-transfer cycle. When everything is working
              correctly, warm air is pulled through the system, cooled, and delivered back through the
              supply vents.
            </p>
            <p className="mt-4 leading-8 text-slate-700">
              If airflow, refrigerant pressure, coils, or controls fall out of balance, the system may
              run longer, cool unevenly, freeze up, or stop keeping up with hot weather.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8">
            <p className="text-sm font-bold uppercase tracking-wide text-red-600">The core components</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-950">Indoor and outdoor parts of central cooling</h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-blue-950 text-white">
                  <Fan className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wide text-red-600">Inside the home</p>
                  <h3 className="text-2xl font-bold text-slate-950">Indoor Unit</h3>
                </div>
              </div>
              <p className="mt-5 leading-7 text-slate-700">
                The indoor side of the system is responsible for pulling heat out of your home's air and
                moving newly cooled air back into the living space. Good airflow is essential here because
                the system needs steady air movement across the coil to cool properly.
              </p>
              <div className="mt-6 space-y-4">
                {indoorParts.map((part) => (
                  <div key={part.title} className="flex gap-3 rounded-md bg-slate-50 p-4">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-800" />
                    <div>
                      <h4 className="font-bold text-slate-950">{part.title}</h4>
                      <p className="mt-1 leading-6 text-slate-600">{part.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-blue-950 text-white">
                  <Gauge className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wide text-red-600">Outside the home</p>
                  <h3 className="text-2xl font-bold text-slate-950">Outdoor Unit</h3>
                </div>
              </div>
              <p className="mt-5 leading-7 text-slate-700">
                The outdoor unit gets rid of the heat that was collected indoors. It changes refrigerant
                pressure and temperature so the system can release heat outside and send refrigerant back
                inside to absorb more heat.
              </p>
              <div className="mt-6 space-y-4">
                {outdoorParts.map((part) => (
                  <div key={part.title} className="flex gap-3 rounded-md bg-slate-50 p-4">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-800" />
                    <div>
                      <h4 className="font-bold text-slate-950">{part.title}</h4>
                      <p className="mt-1 leading-6 text-slate-600">{part.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-red-600">When to call</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-950">Signs your cooling system needs service</h2>
            <p className="mt-4 leading-8 text-slate-700">
              Cooling problems often show up as weak airflow, poor comfort, strange operation, or rising
              utility costs. Scheduling service early can help protect the system before a small issue
              becomes a full breakdown.
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
            <p className="text-sm font-bold uppercase tracking-wide text-red-300">Cooling help</p>
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
