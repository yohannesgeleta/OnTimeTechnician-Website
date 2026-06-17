"use client";

import { useActionState } from "react";
import { useState } from "react";
import { bookAppointment, getAvailableSlots } from "@/app/actions/scheduler";


type AppointmentSlotsProps = {
  date: string;
  availableSlots: string[];
};

const AppointmentSlots = ({ date, availableSlots }: AppointmentSlotsProps) => {
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  function convertTo12Hour(time24: string): string {
    const [hoursStr, minutes] = time24.split(':');
    const hours = parseInt(hoursStr, 10);
    const hours12 = hours % 12 || 12; 
    return `${hours12}:${minutes}`;
  }

  function isAvailable(val:string):boolean{
    if(val in getAvailableSlots(date)){
      return true;
    }
    return false;
  }

  const initialState = {
  success: false,
  message: "",
};

const [state, formAction, pending] = useActionState(
  bookAppointment,
  initialState
);

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">
          Choose an appointment time
        </h1>
        <p className="mt-2 text-slate-600">
          Available times for {date}
        </p>
      </div>
      <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold text-slate-900">
          Available times
        </h2>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {availableSlots.map((slot) => (
            <button
              key={slot}
              type="button"
              onClick={() => setSelectedTime(slot)}
              className={`rounded-lg border px-5 py-4 text-lg font-semibold shadow-sm transition disabled:bg-gray-500 disabled:text-black ${
                selectedTime === slot
                  ? "border-blue-600 bg-blue-600 text-white"
                  : "border-slate-200 bg-white text-slate-800 hover:border-blue-500 hover:bg-blue-50"
              }`}
            >
              {convertTo12Hour(slot)}
            </button>
          ))}
        </div>
      </div>

      {selectedTime && (
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <form action={formAction} className="border w-full max-w-md bg-gray-400 p-10 rounded-lg min-h-[400px] flex flex-col justify-between">
          <input type="hidden" name="selectedDate" value={date} />
          <input type="hidden" name="selectedTime" value={selectedTime} />

          <input name="customerName" placeholder="Name" className="border mb-1 text-lg font-medium"/>
          <input name="customerEmail" placeholder="Email " className="border mb-1 text-lg font-medium" />
          <input name="customerPhone" placeholder="Phone" className="border mb-1 text-lg font-medium"/>

          <select name="serviceType" className="border">
            <option value="Heating Install">Heating Installation</option>
            <option value="Heating Repair">Heating Repair</option>
            <option value="Cooling Install">Cooling Installation</option>
            <option value="Cooling Repair">Cooling Repair</option>
            <option value="Electrical Wiring">Electrical Wiring</option>
            <option value="Electrical Repair">Electrical Repair</option>
            <option value="Indoor Air Quality Filtering">Indoor Air Quality Filtering</option>
            <option value="Indoor Air Quality Repair">Indoor Air Quality Repair</option>
          </select>

          <button type="submit" disabled={pending} className="border rounded-2xl bg-blue-500 text-center text-white text-lg ">
            {pending ? "Booking..." : `Book @ ${convertTo12Hour(selectedTime)}`}
          </button>
        </form>
        </div>
      )}
    </div>
  );
};

export default AppointmentSlots;