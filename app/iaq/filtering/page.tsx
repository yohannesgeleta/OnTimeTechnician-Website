import Link from 'next/link'
import { AirVent, ArrowRight, CheckCircle2, Filter, Home, Sparkles, Wind } from 'lucide-react'

const filteringReasons = [
  'Dust returns quickly after cleaning',
  'Pollen, pet dander, or allergens bother people in the home',
  'Rooms smell stale or air feels heavy when the HVAC system runs',
  'You want better protection for your HVAC equipment and indoor air',
]

const filteringBenefits = [
  'Capture more airborne particles before they recirculate',
  'Reduce dust, pollen, pet dander, and some smoke particles',
  'Support cleaner airflow through the HVAC system',
  'Improve everyday comfort for homes with allergies, pets, or stale air',
]

export default function IndoorAirQualityFilteringPage() {
  return (
    <main className="bg-slate-50 text-slate-950">
      <section className="border-b border-slate-200 bg-white px-6 py-5">
        <nav className="mx-auto flex max-w-6xl items-center gap-3 text-lg font-bold text-slate-700" aria-label="Breadcrumb">
          <Link href="/" className="inline-flex items-center gap-1 text-blue-800 hover:text-blue-950 hover:underline">
            <Home className="h-5 w-5" />
            OnTimeTechnician
          </Link>
          <span className="text-slate-400">/</span>
          <Link href="/iaq" className="text-blue-800 hover:text-blue-950 hover:underline">Indoor Air Quality</Link>
          <span className="text-slate-400">/</span>
          <span className="rounded-md bg-blue-50 px-3 py-1 text-blue-950">Filtering</span>
        </nav>
      </section>

      <section className="bg-blue-950 px-6 py-14 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-wide text-red-300">Indoor air quality filtering</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Better filtration helps keep more particles out of the air you breathe.
          </h1>
          <p className="mt-5 max-w-3xl leading-8 text-slate-200">
            Air filtering works with your HVAC system to capture particles as air circulates through the home.
            The right filtration setup can help reduce dust, pollen, pet dander, mold spores, and other airborne irritants.
          </p>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-red-600">When filtering makes sense</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-950">Why you may need better air filtration</h2>
            <p className="mt-4 leading-8 text-slate-700">
              Standard filters are often designed mainly to protect the equipment, not deeply clean the air.
              If your home feels dusty, stale, or allergy-prone, a better filter strategy or air cleaning solution
              may help improve comfort.
            </p>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              {filteringReasons.map((reason) => (
                <div key={reason} className="flex gap-3 rounded-md bg-slate-50 p-4">
                  <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
                  <span className="font-semibold leading-6 text-slate-800">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8">
            <p className="text-sm font-bold uppercase tracking-wide text-red-600">What matters</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-950">What air filtering can improve</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {filteringBenefits.map((benefit) => (
              <div key={benefit} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <CheckCircle2 className="h-6 w-6 text-blue-800" />
                <p className="mt-4 font-semibold leading-7 text-slate-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 rounded-lg bg-blue-950 p-8 text-white md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <Filter className="h-7 w-7 text-red-300" />
              <h2 className="text-3xl font-bold">Want cleaner air moving through your home?</h2>
            </div>
            <p className="mt-3 max-w-2xl leading-7 text-slate-200">
              Send us a message and we can help you choose the right filtration approach for your HVAC system and comfort goals.
            </p>
          </div>
          <Link href="/contact/message" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-red-600 px-5 py-3 font-bold text-white transition hover:bg-red-700">
            Contact us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
