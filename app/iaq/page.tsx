import Link from 'next/link'
import { AirVent, ArrowRight, CheckCircle2, Fan, Filter, Home, ShieldAlert, Sparkles, TriangleAlert, Wrench } from 'lucide-react'

const pollutants = [
  {
    title: 'Particulate matter',
    description: 'Tiny physical particles float through the air and can settle in your lungs, HVAC equipment, furniture, and ductwork.',
    examples: 'Dust, pollen, pet dander, mold spores, smoke particles, cooking residue, and dust mites.',
  },
  {
    title: 'Volatile organic compounds',
    description: 'VOCs are gases released by common household materials and chemicals. They can build up indoors when ventilation is poor.',
    examples: 'Cleaning products, fresh paint, air fresheners, adhesives, new carpet, furniture, and some building materials.',
  },
  {
    title: 'Moisture and harmful gases',
    description: 'Humidity, combustion byproducts, and invisible gases can affect comfort, odors, mold growth, and safety.',
    examples: 'High humidity, carbon monoxide, radon, gas appliance issues, and stale air trapped inside tight homes.',
  },
]

const improvementMethods = [
  {
    title: 'Source control',
    description: 'The first step is reducing what enters the home. This can mean controlling moisture, using low-VOC products, limiting smoke, sealing leaks, and keeping dust and dander under control.',
  },
  {
    title: 'Filtration',
    description: 'As your HVAC system circulates air, filters capture particles before they keep moving through the house. Better filtration can help reduce dust, pollen, pet dander, and other airborne irritants.',
  },
  {
    title: 'Ventilation',
    description: 'Ventilation replaces stale indoor air with fresher outdoor air. Exhaust fans, fresh-air systems, and balanced airflow help remove odors, humidity, and trapped pollutants.',
  },
  {
    title: 'Humidity control',
    description: 'Air that is too humid can encourage mold and musty odors. Air that is too dry can irritate skin, eyes, and sinuses. Balanced humidity helps the home feel healthier and more comfortable.',
  },
]

const warningSigns = [
  'Frequent headaches, sinus congestion, coughing, or dry eyes indoors',
  'Symptoms improve when you leave the house for a while',
  'Dust returns quickly after cleaning',
  'Lingering cooking, musty, pet, or chemical odors',
  'Condensation on windows or signs of high humidity',
  'Visible mold, stale air, or rooms that feel stuffy',
]

const serviceCards = [
  {
    title: 'Indoor Air Quality Filtering',
    description: 'Improve filtration for dust, pollen, pet dander, smoke particles, and other airborne irritants.',
    href: '/iaq/filtering',
    icon: Fan,
  },
  {
    title: 'Indoor Air Quality Repair',
    description: 'Troubleshoot humidity issues, airflow problems, stale air, odor concerns, and IAQ equipment problems.',
    href: '/iaq/repair',
    icon: Wrench,
  },
]

export default function IndoorAirQualityPage() {
  return (
    <main className="bg-slate-50 text-slate-950">
      <section className="border-b border-slate-200 bg-white px-6 py-5">
        <nav className="mx-auto flex max-w-6xl items-center gap-3 text-lg font-bold text-slate-700" aria-label="Breadcrumb">
          <Link href="/" className="inline-flex items-center gap-1 text-blue-800 hover:text-blue-950 hover:underline">
            <Home className="h-5 w-5" />
            OnTimeTechnician
          </Link>
          <span className="text-slate-400">/</span>
          <span className="px-1 py-1 text-blue-950">Indoor Air Quality</span>
        </nav>
      </section>

      <section className="px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-wide text-red-600">Indoor air quality service</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-bold leading-tight text-slate-950 sm:text-5xl">
            Cleaner indoor air starts with controlling particles, moisture, odors, and airflow.
          </h1>
          <div className="mt-5 max-w-4xl space-y-4 leading-8 text-slate-700">
            <p>
              Indoor air quality is about more than temperature. The air inside a home can carry dust,
              pollen, pet dander, mold spores, odors, chemical vapors, humidity, and stale air that keeps
              recirculating through the living space.
            </p>
            <p>
              Your HVAC system plays a major role because it moves air through the home every day. When
              filtration, ventilation, humidity, and airflow are balanced, the home can feel fresher,
              cleaner, and more comfortable.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-14">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          <div>
            <div className="mb-7">
              <p className="text-sm font-bold uppercase tracking-wide text-red-600">Pollutants</p>
              <h2 className="mt-2 text-3xl font-bold text-slate-950">Three main types of indoor pollutants</h2>
              <p className="mt-4 leading-7 text-slate-600">
                Indoor air problems usually come from a mix of particles, gases, moisture, and poor air exchange.
              </p>
            </div>

            <div className="space-y-4">
              {pollutants.map((item) => (
                <div key={item.title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-blue-950 text-white">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-950">{item.title}</h3>
                      <p className="mt-2 leading-7 text-slate-600">{item.description}</p>
                      <p className="mt-2 text-sm font-semibold leading-6 text-slate-700">Examples: {item.examples}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-7">
              <p className="text-sm font-bold uppercase tracking-wide text-red-600">Air improvement</p>
              <h2 className="mt-2 text-3xl font-bold text-slate-950">How homes improve air quality</h2>
              <p className="mt-4 leading-7 text-slate-600">
                Good air quality comes from reducing pollutants, capturing particles, moving stale air out, and controlling moisture.
              </p>
            </div>

            <div className="space-y-4">
              {improvementMethods.map((item) => (
                <div key={item.title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-blue-950 text-white">
                      <Filter className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-950">{item.title}</h3>
                      <p className="mt-2 leading-7 text-slate-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-red-600">When to call</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-950">Signs your indoor air quality needs service</h2>
            <p className="mt-4 leading-8 text-slate-700">
              Air quality issues often show up as comfort, health, odor, dust, or humidity problems. If
              the home feels stale, smells linger, or symptoms seem worse indoors, the air system may need attention.
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
            <p className="text-sm font-bold uppercase tracking-wide text-red-300">Indoor air quality help</p>
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
