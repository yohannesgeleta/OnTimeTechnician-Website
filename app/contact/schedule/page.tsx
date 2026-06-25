import CalendarGrid from './calender'

export default function SchedulePage() {
  return (
    <main className="bg-slate-50 text-slate-950">
      <section className="border-b border-slate-200 bg-blue-950 px-6 py-14 text-white">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm font-bold uppercase tracking-wide text-red-300">Schedule service</p>
          <h1 className="mx-auto mt-3 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Choose an appointment date.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-200">
            Select a day on the calendar to view available appointment times for heating, cooling,
            electrical, or indoor air quality service.
          </p>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="mx-auto max-w-5xl rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <div className="mb-7 text-center">
            <p className="text-sm font-bold uppercase tracking-wide text-red-600">Pick your date</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-950">Select an appointment day</h2>
          </div>
          <CalendarGrid />
        </div>
      </section>
    </main>
  )
}
