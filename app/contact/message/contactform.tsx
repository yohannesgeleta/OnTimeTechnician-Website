"use client";

import React, { useState } from "react";
import { Clock, Mail, MapPin, MessageSquare, Phone, Send } from "lucide-react";

const serviceOptions = [
  "Heating",
  "Cooling",
  "Electrical",
  "Indoor Air Quality",
  "General Question",
];

export default function ContactForm() {
  const [work, setWork] = useState("Heating");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="px-6 py-14">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <aside className="rounded-lg bg-white p-8 shadow-sm ring-1 ring-slate-200">
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
                <a href="tel:7170000000" className="text-slate-700 hover:text-blue-800 hover:underline">
                  717-xxx-xxxx
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

        <div className="rounded-lg bg-white p-8 shadow-sm ring-1 ring-slate-200">
          <div className="mb-6 flex items-start gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-blue-950 text-white">
              <MessageSquare className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-950">Send a message</h2>
              <p className="mt-1 text-slate-600">Tell us about the service you need.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-bold text-slate-700">First Name</span>
                <input
                  name="firstName"
                  type="text"
                  required
                  className="mt-2 h-11 w-full rounded-md border border-slate-300 px-3 text-slate-950 outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
                />
              </label>

              <label className="block">
                <span className="text-sm font-bold text-slate-700">Last Name</span>
                <input
                  name="lastName"
                  type="text"
                  required
                  className="mt-2 h-11 w-full rounded-md border border-slate-300 px-3 text-slate-950 outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
                />
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-bold text-slate-700">Phone Number</span>
                <input
                  name="phoneNumber"
                  type="tel"
                  required
                  className="mt-2 h-11 w-full rounded-md border border-slate-300 px-3 text-slate-950 outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
                />
              </label>

              <label className="block">
                <span className="text-sm font-bold text-slate-700">Email</span>
                <input
                  name="email"
                  type="email"
                  required
                  className="mt-2 h-11 w-full rounded-md border border-slate-300 px-3 text-slate-950 outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
                />
              </label>
            </div>

            <fieldset>
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
                      onChange={(event) => setWork(event.target.value)}
                      className="sr-only"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </fieldset>

            <label className="block">
              <span className="text-sm font-bold text-slate-700">Message</span>
              <textarea
                name="message"
                rows={6}
                required
                placeholder="Briefly describe the issue, preferred timing, or any details we should know."
                className="mt-2 min-h-[150px] w-full resize-y rounded-md border border-slate-300 p-3 text-slate-950 outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
              />
            </label>

            {submitted && (
              <p className="rounded-md border border-green-200 bg-green-50 px-4 py-3 font-semibold text-green-800">
                Thanks. Your message is ready to be connected to your email or backend service.
              </p>
            )}

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-red-600 px-5 py-3 font-bold text-white transition hover:bg-red-700 sm:w-auto"
            >
              Send Message
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
