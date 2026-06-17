import { getAvailableSlots } from "@/app/actions/scheduler";
import React from "react";
import AppointmentSlots from "./AppointmentsSlots";

type DatePageProps = {
  params: {
    date: string;
  };
};



const DatePage = async ({ params }: DatePageProps) => {
    const { date } = await params;
    const availableSlots = await getAvailableSlots(date);


    return (
        <div>
            <AppointmentSlots date={date} availableSlots={availableSlots} />
        </div>
  );
};

export default DatePage;