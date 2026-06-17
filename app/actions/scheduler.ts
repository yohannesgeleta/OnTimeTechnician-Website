"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

// 1. Define Business Constants
const START_HOUR = 9; 
const END_HOUR = 17;  
const SLOT_DURATION_MIN = 60;

export type FormState = {
  success: boolean;
  message: string;
};

/**
 * Action 1: Calculates which time slots are open on a given date
 * @param dateStr Format: "YYYY-MM-DD" from the frontend calendar
 */
export async function getAvailableSlots(dateStr: string): Promise<string[]> {
  if (!dateStr) return [];

  // Create boundary dates for the requested day in local time
  const targetDate = new Date(dateStr);
  
  const [year, month, day] = dateStr.split("-").map(Number);
  const startOfDay = new Date(year, month - 1, day, 0, 0, 0, 0);
  const endOfDay = new Date(year, month - 1, day, 23, 59, 59, 999);

  // Step 1: Query database for all existing appointments on this day
  const bookedAppointments = await prisma.appointment.findMany({
    where: {
      dateTime: {
        gte: startOfDay,
        lte: endOfDay,
      },
    },
    select: {
      dateTime: true,
    },
  });

  // Convert booked appointments to simple time strings "HH:MM" for easy comparison
  const bookedTimes = bookedAppointments.map((appt:{ dateTime: Date }) => {
    return appt.dateTime.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  });

  // Step 2: Build the complete list of theoretical slots for the day
  const allSlots: string[] = [];
  let currentHour = START_HOUR;

  while (currentHour < END_HOUR) {
    const timeString = `${currentHour.toString().padStart(2, "0")}:00`;
    allSlots.push(timeString);
    currentHour += SLOT_DURATION_MIN / 60;
  }

  // Step 3: Filter out any slot that matches a booked appointment
  const availableSlots = allSlots.filter((slot) => !bookedTimes.includes(slot));

  return availableSlots;
}

/**
 * Action 2: Validates and saves a new appointment to PostgreSQL
 */
export async function bookAppointment(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const customerName = formData.get("customerName")?.toString().trim();
  const customerEmail = formData.get("customerEmail")?.toString().trim();
  const customerPhone = formData.get("customerPhone")?.toString().trim();
  const serviceType = formData.get("serviceType")?.toString();
  const selectedDate = formData.get("selectedDate")?.toString(); // "YYYY-MM-DD"
  const selectedTime = formData.get("selectedTime")?.toString(); // "HH:MM"

  // 1. Base Input Validation
  if (!customerName || !customerEmail || !customerPhone || !serviceType || !selectedDate || !selectedTime) {
    return { success: false, message: "Missing required booking details." };
  }

  // 2. Combine date and time strings into a single Javascript Date Object
  const appointmentDateTime = new Date(`${selectedDate}T${selectedTime}:00`);

  try {
    // 3. Collision Check: Verify the slot didn't get taken while the user filled out the form
    const existingBooking = await prisma.appointment.findFirst({
      where: {
        dateTime: appointmentDateTime,
      },
    });

    if (existingBooking) {
      return {
        success: false,
        message: "This specific slot was just booked by someone else. Please choose another time.",
      };
    }

    // 4. Secure the Lock: Safe insertion into PostgreSQL
    await prisma.appointment.create({
      data: {
        customerName,
        customerEmail,
        customerPhone,
        serviceType,
        dateTime: appointmentDateTime,
        duration: SLOT_DURATION_MIN, // Matches database migration default
      },
    });

    // 5. Purge Next.js page cache so the calendar instantly reflects the missing slot
    revalidatePath(`/contact/schedule/${selectedDate}`);

    return {
      success: true,
      message: "Your appointment has been successfully scheduled!",
    };
  } catch (error) {
    console.error("Database write failure:", error);
    return {
      success: false,
      message: "A database error occurred. Please try again later.",
    };
  }
}