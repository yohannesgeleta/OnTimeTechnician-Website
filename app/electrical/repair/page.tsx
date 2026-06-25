import Link from 'next/link'
import { ArrowRight, CheckCircle2, Home, ShieldAlert, TriangleAlert, Wrench, Zap } from 'lucide-react'

const repairSigns = [
  'Breakers trip repeatedly or will not reset',
  'Lights flicker, dim, or pulse when appliances start',
  'Outlets, switches, or cover plates feel warm',
  'Buzzing, humming, popping, or sizzling sounds',
  'Burning, fishy, or plastic-like smells near outlets or panels',
  'Sparks, discoloration, loose outlets, or unreliable power',
]

const repairProcess = [
  'Inspect the affected outlet, switch, fixture, panel, or circuit',
  'Check for overloads, loose connections, damaged devices, and unsafe wiring',
  'Identify whether the issue is device-related, circuit-related, or panel-related',
  'Explain the repair options clearly before work begins',
]

export default function ElectricalRepairPage() {
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
          <span className="rounded-md bg-blue-50 px-3 py-1 text-blue-950">Repair</span>
        </nav>
      </section>

      <section className="bg-blue-950 px-6 py-14 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-wide text-red-300">Electrical repair</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Fix electrical issues before they become unsafe or unreliable.
          </h1>
          <p className="mt-5 max-w-3xl leading-8 text-slate-200">
            Electrical problems can come from overloaded circuits, loose wiring, damaged outlets,
            worn switches, faulty breakers, or equipment that is drawing more power than the circuit
            can safely handle. A proper repair starts with finding the source of the issue.
          </p>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-red-600">When to schedule repair</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-950">Signs your electrical system needs attention</h2>
            <p className="mt-4 leading-8 text-slate-700">
              Electrical warning signs should be taken seriously. Heat, odors, sounds, sparks, and repeated
              breaker trips can point to a circuit or connection that needs professional attention.
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              {repairSigns.map((sign) => (
                <div key={sign} className="flex gap-3 rounded-md bg-slate-50 p-4">
                  <TriangleAlert className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
                  <span className="font-semibold leading-6 text-slate-800">{sign}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8">
            <p className="text-sm font-bold uppercase tracking-wide text-red-600">Our repair approach</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-950">How we find the problem</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {repairProcess.map((step) => (
              <div key={step} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <CheckCircle2 className="h-6 w-6 text-blue-800" />
                <p className="mt-4 font-semibold leading-7 text-slate-700">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="mx-auto grid max-w-6xl gap-6 rounded-lg border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-[auto_1fr]">
          <div className="flex h-16 w-16 items-center justify-center rounded-md bg-blue-950 text-white">
            <ShieldAlert className="h-8 w-8" />
          </div>
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-bold text-slate-950">Do not ignore electrical warning signs.</h2>
              <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                If something smells hot, sounds wrong, sparks, or keeps tripping, contact us before using that circuit again.
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
