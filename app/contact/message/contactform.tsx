"use client";

import React, { useActionState, useState, type FormEvent } from "react";
import { Clock, Mail, MapPin, MessageSquare, Phone, Send } from "lucide-react";
import { sendMessage, type FieldName, type FormHelp } from "./backend";

const serviceOptions = [
  "Heating",
  "Cooling",
  "Electrical",
  "Indoor Air Quality",
  "General Question",
];

const initialState: FormHelp = {
  success: false,
  message: "",
  fieldErrors: {},
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const fieldNames: FieldName[] = ["firstName", "lastName", "phoneNumber", "email", "work", "message"];

function validateForm(form: HTMLFormElement): FormHelp["fieldErrors"] {
  const formData = new FormData(form);
  const value = (name: FieldName) => formData.get(name)?.toString().trim() ?? "";
  const errors: FormHelp["fieldErrors"] = {};

  if (!value("firstName")) errors.firstName = "First name is required.";
  if (!value("lastName")) errors.lastName = "Last name is required.";

  const phoneNumber = value("phoneNumber");
  if (!phoneNumber) {
    errors.phoneNumber = "Phone number is required.";
  } else if (!/^[\d\s()+.-]+$/.test(phoneNumber) || phoneNumber.replace(/\D/g, "").length !== 10) {
    errors.phoneNumber = "Phone number must contain exactly 10 digits.";
  }

  const email = value("email");
  if (!email) {
    errors.email = "Email is required.";
  } else if (!emailPattern.test(email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!value("work")) errors.work = "Please select the type of service you need.";
  if (!value("message")) errors.message = "Message is required.";

  return errors;
}

export default function ContactForm() {
  const [work, setWork] = useState("Heating");
  const [clientErrors, setClientErrors] = useState<FormHelp["fieldErrors"]>({});
  const [state, formAction, isPending] = useActionState(sendMessage, initialState);
  const errors = { ...state.fieldErrors, ...clientErrors };

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    const nextErrors = validateForm(event.currentTarget);
    setClientErrors({
      ...Object.fromEntries(fieldNames.map((field) => [field, undefined])),
      ...nextErrors,
    });

    if (Object.keys(nextErrors).length > 0) {
      event.preventDefault();
      const firstInvalidField = event.currentTarget.querySelector<HTMLElement>(
        `[name="${Object.keys(nextErrors)[0]}"]`,
      );
      firstInvalidField?.focus();
    }
  }

  function clearError(field: FieldName) {
    setClientErrors((current) => ({ ...current, [field]: undefined }));
  }

  const inputClass = (field: FieldName) =>
    `mt-2 h-11 w-full rounded-md border px-3 text-slate-950 outline-none transition focus:ring-2 ${
      errors[field]
        ? "border-red-500 focus:border-red-600 focus:ring-red-100"
        : "border-slate-300 focus:border-blue-700 focus:ring-blue-100"
    }`;

  return (
    <section className="px-4 py-10 sm:px-6 sm:py-14">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <aside className="rounded-lg bg-white p-5 shadow-sm sm:p-8 ring-1 ring-slate-200">
          <p className="text-sm font-bold uppercase tracking-wide text-red-600">Local service team</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-950">We are here to help.</h2>
          <p className="mt-4 leading-7 text-slate-600">
            Share a few details about the issue and we will get back to you with the best way to move
            forward. For urgent service, calling is usually fastest.
          </p>

          <div className="mt-8 space-y-5">
            <div className="flex gap-4">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-blue-800" />
              <div>
                <div className="font-bold text-slate-950">Phone</div>
                <a href="tel:717-813-4896" className="text-slate-700 hover:text-blue-800 hover:underline">
                  717-813-4896
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <Mail className="mt-1 h-5 w-5 shrink-0 text-blue-800" />
              <div>
                <div className="font-bold text-slate-950">Email</div>
                <div className="text-slate-700">Send us a message anytime</div>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="mt-1 h-5 w-5 shrink-0 text-blue-800" />
              <div>
                <div className="font-bold text-slate-950">Business Hours</div>
                <div className="text-slate-700">9am-7pm</div>
              </div>
            </div>

            <div className="flex gap-4">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-blue-800" />
              <div>
                <div className="font-bold text-slate-950">Serving</div>
                <div className="text-slate-700">Lancaster, PA and surrounding communities</div>
              </div>
            </div>
          </div>
        </aside>

        <div className="rounded-lg bg-white p-5 shadow-sm sm:p-8 ring-1 ring-slate-200">
          <div className="mb-6 flex items-start gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-blue-950 text-white">
              <MessageSquare className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-950">Send a message</h2>
              <p className="mt-1 text-slate-600">Tell us about the service you need.</p>
            </div>
          </div>

          <form action={formAction} onSubmit={handleSubmit} noValidate className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-bold text-slate-700">First Name</span>
                <input
                  name="firstName"
                  type="text"
                  required
                  aria-invalid={Boolean(errors.firstName)}
                  aria-describedby={errors.firstName ? "firstName-error" : undefined}
                  onChange={() => clearError("firstName")}
                  className={inputClass("firstName")}
                />
                {errors.firstName && <p id="firstName-error" className="mt-1 text-sm text-red-700">{errors.firstName}</p>}
              </label>

              <label className="block">
                <span className="text-sm font-bold text-slate-700">Last Name</span>
                <input
                  name="lastName"
                  type="text"
                  required
                  aria-invalid={Boolean(errors.lastName)}
                  aria-describedby={errors.lastName ? "lastName-error" : undefined}
                  onChange={() => clearError("lastName")}
                  className={inputClass("lastName")}
                />
                {errors.lastName && <p id="lastName-error" className="mt-1 text-sm text-red-700">{errors.lastName}</p>}
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-bold text-slate-700">Phone Number</span>
                <input
                  name="phoneNumber"
                  type="tel"
                  required
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="555-555-5555"
                  aria-invalid={Boolean(errors.phoneNumber)}
                  aria-describedby={errors.phoneNumber ? "phoneNumber-error" : undefined}
                  onChange={() => clearError("phoneNumber")}
                  className={inputClass("phoneNumber")}
                />
                {errors.phoneNumber && <p id="phoneNumber-error" className="mt-1 text-sm text-red-700">{errors.phoneNumber}</p>}
              </label>

              <label className="block">
                <span className="text-sm font-bold text-slate-700">Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  onChange={() => clearError("email")}
                  className={inputClass("email")}
                />
                {errors.email && <p id="email-error" className="mt-1 text-sm text-red-700">{errors.email}</p>}
              </label>
            </div>

            <fieldset aria-invalid={Boolean(errors.work)} aria-describedby={errors.work ? "work-error" : undefined}>
              <legend className="text-sm font-bold text-slate-700">What can we help with?</legend>
              <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {serviceOptions.map((option) => (
                  <label
                    key={option}
                    className={`cursor-pointer rounded-md border px-4 py-3 text-sm font-semibold transition ${
                      work === option
                        ? "border-blue-700 bg-blue-50 text-blue-900"
                        : "border-slate-300 bg-white text-slate-700 hover:border-blue-400"
                    }`}
                  >
                    <input
                      type="radio"
                      name="work"
                      value={option}
                      checked={work === option}
                      required
                      onChange={(event) => {
                        setWork(event.target.value);
                        clearError("work");
                      }}
                      className="sr-only"
                    />
                    {option}
                  </label>
                ))}
              </div>
              {errors.work && <p id="work-error" className="mt-2 text-sm text-red-700">{errors.work}</p>}
            </fieldset>

            <label className="block">
              <span className="text-sm font-bold text-slate-700">Message</span>
              <textarea
                name="message"
                rows={6}
                required
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
                onChange={() => clearError("message")}
                placeholder="Briefly describe the issue, preferred timing, or any details we should know."
                className={`mt-2 min-h-[150px] w-full resize-y rounded-md border p-3 text-slate-950 outline-none transition focus:ring-2 ${
                  errors.message
                    ? "border-red-500 focus:border-red-600 focus:ring-red-100"
                    : "border-slate-300 focus:border-blue-700 focus:ring-blue-100"
                }`}
              />
              {errors.message && <p id="message-error" className="mt-1 text-sm text-red-700">{errors.message}</p>}
            </label>

            {state.message && (
              <p
                className={`rounded-md border px-4 py-3 font-semibold ${
                  state.success
                    ? "border-green-200 bg-green-50 text-green-800"
                    : "border-red-200 bg-red-50 text-red-800"
                }`}
              >
                {state.message}
              </p>
            )}

            <button
              type="submit"
              disabled={isPending}
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-red-600 px-5 py-3 font-bold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-slate-400 sm:w-auto"
            >
              {isPending ? "Sending..." : "Send Message"}
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
