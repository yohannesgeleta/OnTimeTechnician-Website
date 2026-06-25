"use client";

import { useActionState, useEffect, useState } from "react";
import { bookAppointment } from "@/app/actions/scheduler";
import { useRouter } from "next/navigation";
import { CalendarDays, CheckCircle2, Clock, Send, Wrench } from "lucide-react";

type AppointmentSlotsProps = {
  date: string;
  availableSlots: string[];
};

const serviceOptions = [
  { value: "Heating Install", label: "Heating Installation" },
  { value: "Heating Repair", label: "Heating Repair" },
  { value: "Cooling Install", label: "Cooling Installation" },
  { value: "Cooling Repair", label: "Cooling Repair" },
  { value: "Electrical Wiring", label: "Electrical Wiring" },
  { value: "Electrical Repair", label: "Electrical Repair" },
  { value: "Indoor Air Quality Filtering", label: "Indoor Air Quality Filtering" },
  { value: "Indoor Air Quality Repair", label: "Indoor Air Quality Repair" },
];

const initialState = {
  success: false,
  message: "",
};

const AppointmentSlots = ({ date, availableSlots }: AppointmentSlotsProps) => {
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const router = useRouter();

  function convertTo12Hour(time24: string): string {
    const [hoursStr, minutes] = time24.split(":");
    const hours = parseInt(hoursStr, 10);
    const hours12 = hours % 12 || 12;
    const period = hours >= 12 ? "PM" : "AM";

    return `${hours12}:${minutes} ${period}`;
  }

  const formattedDate = new Date(`${date}T12:00:00`).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const [state, formAction, pending] = useActionState(
    bookAppointment,
    initialState
  );

  useEffect(() => {
    if (state.success) {
      setSelectedTime(null);
      router.refresh();
    }
  }, [state.success, router]);

  return (
    <main className="bg-slate-50 px-6 py-14 text-slate-950">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <p className="text-sm font-bold uppercase tracking-wide text-red-600">Appointment times</p>
          <h1 className="mt-2 text-4xl font-bold text-slate-950">Choose a service time</h1>
          <p className="mt-3 text-slate-600">Available appointments for {formattedDate}</p>
        </div>

        {state.message && (
          <div
            className={`mb-6 rounded-md border px-4 py-3 text-center font-semibold ${
              state.success
                ? "border-green-200 bg-green-50 text-green-800"
                : "border-red-200 bg-red-50 text-red-800"
            }`}
          >
            {state.message}
          </div>
        )}

        <div className="grid gap-8 lg:grid-cols-[1fr_420px]">
          <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center gap-3 border-b border-slate-200 pb-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-blue-950 text-white">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-950">Available times</h2>
                <p className="text-sm text-slate-600">Select a time to open the booking form.</p>
              </div>
            </div>

            {availableSlots.length > 0 ? (
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {availableSlots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setSelectedTime(slot)}
                    className={`rounded-md border px-5 py-4 text-lg font-bold shadow-sm transition ${
                      selectedTime === slot
                        ? "border-blue-950 bg-blue-950 text-white"
                        : "border-slate-200 bg-white text-slate-800 hover:border-blue-500 hover:bg-blue-50"
                    }`}
                  >
                    {convertTo12Hour(slot)}
                  </button>
                ))}
              </div>
            ) : (
              <div className="rounded-md border border-slate-200 bg-slate-50 p-6 text-center text-slate-700">
                No appointment times are available for this date. Please go back and choose another day.
              </div>
            )}
          </section>

          <aside className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            {selectedTime ? (
              <>
                <div className="mb-5 rounded-md bg-blue-950 p-5 text-white">
                  <p className="text-sm font-bold uppercase tracking-wide text-red-300">Selected appointment</p>
                  <div className="mt-4 space-y-3">
                    <div className="flex gap-3">
                      <CalendarDays className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
                      <span className="font-semibold">{formattedDate}</span>
                    </div>
                    <div className="flex gap-3">
                      <Clock className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
                      <span className="font-semibold">{convertTo12Hour(selectedTime)}</span>
                    </div>
                  </div>
                </div>

                <form action={formAction} className="space-y-4">
                  <input type="hidden" name="selectedDate" value={date} />
                  <input type="hidden" name="selectedTime" value={selectedTime} />

                  <label className="block">
                    <span className="text-sm font-bold text-slate-700">Name</span>
                    <input
                      name="customerName"
                      required
                      className="mt-2 h-11 w-full rounded-md border border-slate-300 px-3 text-slate-950 outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
                    />
                  </label>

                  <label className="block">
                    <span className="text-sm font-bold text-slate-700">Email</span>
                    <input
                      name="customerEmail"
                      type="email"
                      required
                      className="mt-2 h-11 w-full rounded-md border border-slate-300 px-3 text-slate-950 outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
                    />
                  </label>

                  <label className="block">
                    <span className="text-sm font-bold text-slate-700">Phone</span>
                    <input
                      name="customerPhone"
                      type="tel"
                      required
                      className="mt-2 h-11 w-full rounded-md border border-slate-300 px-3 text-slate-950 outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
                    />
                  </label>

                  <label className="block">
                    <span className="text-sm font-bold text-slate-700">Service type</span>
                    <select
                      name="serviceType"
                      required
                      className="mt-2 h-11 w-full rounded-md border border-slate-300 bg-white px-3 text-slate-950 outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
                    >
                      {serviceOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </label>

                  <button
                    type="submit"
                    disabled={pending}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-red-600 px-5 py-3 font-bold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-slate-400"
                  >
                    {pending ? "Booking..." : `Confirm ${convertTo12Hour(selectedTime)}`}
                    {!pending && <Send className="h-4 w-4" />}
                  </button>
                </form>
              </>
            ) : (
              <div className="flex min-h-[420px] flex-col items-center justify-center rounded-md border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-md bg-blue-100 text-blue-950">
                  <Wrench className="h-7 w-7" />
                </div>
                <h2 className="mt-5 text-2xl font-bold text-slate-950">Select a time</h2>
                <p className="mt-3 leading-7 text-slate-600">
                  Choose an available appointment time and the booking form will appear here.
                </p>
                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-slate-600">
                  <CheckCircle2 className="h-4 w-4 text-blue-800" />
                  Your spot is not reserved until the form is submitted.
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </main>
  );
};

export default AppointmentSlots;
