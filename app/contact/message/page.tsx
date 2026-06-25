import ContactForm from './contactform'

export default function ContactMessagePage() {
  return (
    <main className="bg-slate-50">
      <section className="border-b border-slate-200 bg-blue-950 px-6 py-14 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-wide text-red-300">Contact OnTimeTechnician</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Tell us what is going on. We will help you find the right next step.
          </h1>
          <p className="mt-5 max-w-2xl leading-8 text-slate-200">
            Send a message for heating, cooling, electrical, or indoor air quality service. A local
            team member will review your request and follow up with clear next steps.
          </p>
        </div>
      </section>

      <ContactForm />
    </main>
  )
}
