import Link from 'next/link'
import { ArrowRight, Cable, CheckCircle2, CircuitBoard, Home, Lightbulb, PlugZap } from 'lucide-react'

const wiringReasons = [
  'You are adding new rooms, outlets, lighting, or dedicated circuits',
  'Older wiring no longer supports modern appliances or equipment safely',
  'You need outlet, switch, fixture, or circuit upgrades during a remodel',
  'You want safer, cleaner wiring for smart devices, lighting, or workspace needs',
]

const wiringBenefits = [
  'Correct wire size and circuit protection for the intended load',
  'Cleaner outlet, switch, lighting, and equipment placement',
  'Safer service for appliances, tools, and modern electronics',
  'A more dependable electrical setup for everyday use',
]

export default function ElectricalWiringPage() {
  return (
    <main className="bg-slate-50 text-slate-950">
      <section className="border-b border-slate-200 bg-white px-6 py-5">
        <nav className="mx-auto flex max-w-6xl items-center gap-3 text-lg font-bold text-slate-700" aria-label="Breadcrumb">
          <Link href="/" className="inline-flex items-center gap-1 text-blue-800 hover:text-blue-950 hover:underline">
            <Home className="h-5 w-5" />
            OnTimeTechnician
          </Link>
          <span className="text-slate-400">/</span>
          <Link href="/electrical" className="text-blue-800 hover:text-blue-950 hover:underline">Electrical</Link>
          <span className="text-slate-400">/</span>
          <span className="rounded-md bg-blue-50 px-3 py-1 text-blue-950">Wiring</span>
        </nav>
      </section>

      <section className="bg-blue-950 px-4 py-10 sm:px-6 sm:py-14 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-wide text-red-300">Electrical wiring</p>
          <h1 className="mt-3 max-w-3xl text-3xl font-bold leading-tight sm:text-5xl">
            Safe wiring starts with the right circuit, load, and layout.
          </h1>
          <p className="mt-5 max-w-3xl leading-8 text-slate-200">
            Electrical wiring is the path that carries power from your panel to the outlets, switches,
            lighting, appliances, and equipment throughout your property. Good wiring work is planned
            around safety, capacity, code requirements, and how the space will actually be used.
          </p>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 sm:py-14">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-red-600">When wiring work makes sense</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-950">Why you may need electrical wiring service</h2>
            <p className="mt-4 leading-8 text-slate-700">
              Wiring work is often needed when a property changes. Remodels, additions, new appliances,
              workshops, lighting upgrades, and smart home devices may all require new or updated circuits
              so the electrical system can support the load safely.
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              {wiringReasons.map((reason) => (
                <div key={reason} className="flex gap-3 rounded-md bg-slate-50 p-4">
                  <PlugZap className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
                  <span className="font-semibold leading-6 text-slate-800">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-10 sm:px-6 sm:py-14">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8">
            <p className="text-sm font-bold uppercase tracking-wide text-red-600">What matters</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-950">What professional wiring should provide</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {wiringBenefits.map((benefit) => (
              <div key={benefit} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <CheckCircle2 className="h-6 w-6 text-blue-800" />
                <p className="mt-4 font-semibold leading-7 text-slate-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 sm:py-14">
        <div className="mx-auto grid max-w-6xl gap-6 rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-8 lg:grid-cols-[auto_1fr]">
          <div className="flex h-16 w-16 items-center justify-center rounded-md bg-blue-950 text-white">
            <CircuitBoard className="h-8 w-8" />
          </div>
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-bold text-slate-950">Planning new wiring or circuit work?</h2>
              <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                Send us a message and we can help you plan outlets, switches, lighting, dedicated circuits, or wiring upgrades.
              </p>
            </div>
            <Link href="/contact/message" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-red-600 px-5 py-3 font-bold text-white transition hover:bg-red-700">
              Contact us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
