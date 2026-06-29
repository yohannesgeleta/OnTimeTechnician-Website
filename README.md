# OnTimeTechnician Service Platform

A responsive customer-service and scheduling platform for a family-owned HVAC, electrical, and indoor air quality business serving Central Pennsylvania.

**Live Demo:** [Add deployed application URL](https://www.ontimetechnician.com)

**Source Code:** [github.com/yohannesgeleta/OnTimeTechnician-Website](https://github.com/yohannesgeleta/OnTimeTechnician-Website)

## Problem & Solution

Home-service customers need a fast, dependable way to understand available services, request help, and schedule an appointment from any device. Phone-only workflows create unnecessary friction, while generic contact forms often lose important service details or require manual follow-up before a request can be processed.

OnTimeTechnician provides a focused digital workflow that allows customers to:

- Explore heating, cooling, electrical, and indoor air quality services.
- View available appointment dates and one-hour service windows.
- Reserve an available time without double-booking an existing appointment.
- Send a validated service request directly to the business owner's email inbox.

The application combines a responsive public website with server-side scheduling, PostgreSQL persistence, and transactional email delivery.

## Tech Stack

| Area | Technology |
| --- | --- |
| Framework | Next.js 16, App Router, React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS 4, CSS Modules |
| Database | PostgreSQL |
| Data Access | Prisma ORM 7, Prisma PostgreSQL adapter |
| Email | Resend |
| Scheduling UI | React Calendar |
| Icons | Lucide React |

## Key Features

### Online Scheduling

- Presents available one-hour appointment windows for the selected date.
- Queries PostgreSQL to remove previously booked times from availability.
- Performs a second collision check on submission to reduce double-booking risk.
- Stores customer contact details, service type, and appointment time through a server action.
- Refreshes availability immediately after a successful reservation.

### Contact-to-Email Workflow

- Collects the customer's name, phone number, email address, service category, and message.
- Validates required fields, email format, and ten-digit phone numbers in both the browser and server action.
- Sends the complete request to a configured personal or business email through Resend.
- Sets the customer's address as `Reply-To`, allowing the business owner to respond directly from their inbox.
- Escapes customer-provided content before including it in the HTML email.

### Responsive Service Experience

- Provides dedicated pages for heating, cooling, electrical, and indoor air quality services.
- Uses compact mobile navigation with touch-friendly expandable sections.
- Adapts typography, spacing, forms, and scheduling controls for phone, tablet, and desktop screens.
- Includes accessible labels, validation feedback, focus states, and semantic page structure.

## Local Setup

### Prerequisites

- Node.js 20 or later
- npm
- PostgreSQL database
- Resend account with a verified sending domain

### 1. Clone and install

```bash
git clone https://github.com/yohannesgeleta/OnTimeTechnician-Website.git
cd OnTimeTechnician-Website
npm install
```

### 2. Configure environment variables

Create a local environment file from the provided template:

```bash
cp .env.example .env
```

Update `.env` with your database and Resend credentials:

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:5432/DATABASE"
DIRECT_URL="postgresql://USER:PASSWORD@HOST:5432/DATABASE"
RESEND_API_KEY="re_your_api_key"
CONTACT_TO_EMAIL="owner@example.com"
CONTACT_FROM_EMAIL="OnTime Technician <mail@your-verified-domain.com>"
```

`CONTACT_FROM_EMAIL` must use a domain verified in Resend. Environment files contain secrets and must never be committed.

### 3. Prepare the database

```bash
npx prisma generate
npx prisma migrate deploy
```

### 4. Start the application

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm start
```

## Architecture Overview

- Next.js App Router pages render the service, contact, and scheduling experiences.
- Server actions validate submissions and keep database and email credentials off the client.
- Prisma manages appointment persistence and enforces unique appointment timestamps.
- Resend delivers contact-form submissions to the configured destination inbox.

## Author

**Yohannes Geleta**

[GitHub](https://github.com/yohannesgeleta)
