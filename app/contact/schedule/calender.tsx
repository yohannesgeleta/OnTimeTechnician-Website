"use client";

import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from './calender.module.css'
import { useRouter } from 'next/navigation';
import { ArrowRight, CalendarDays } from 'lucide-react';

function CalendarGrid() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const router = useRouter();

  const formatDateForUrl = (value: Date) => {
    const year = value.getFullYear();
    const month = String(value.getMonth() + 1).padStart(2, '0');
    const day = String(value.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  }

  const handleDayClick = (value: Date) => {
    router.push(`/contact/schedule/${formatDateForUrl(value)}`);
  }

  return (
    <div className={styles.calendarShell}>
      <Calendar
        value={selectedDate}
        minDate={new Date()}
        onChange={(value) => {
          if (value instanceof Date) {
            setSelectedDate(value);
          }
        }}
        onClickDay={(date) => handleDayClick(date)}
        className={styles.reactCalendar}
      />

      <div className={styles.selectionBar}>
        <div className={styles.selectionIcon}>
          <CalendarDays className="h-5 w-5" />
        </div>
        <div>
          <p className={styles.selectionLabel}>Selected date</p>
          <p className={styles.selectionDate}>{selectedDate.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })}</p>
        </div>
        <div className={styles.selectionHint}>
          Click a day
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
}

export default CalendarGrid;
