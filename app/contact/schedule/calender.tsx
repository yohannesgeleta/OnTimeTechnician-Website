"use client";
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; 
import styles from './calender.module.css'
import { useRouter } from 'next/navigation';

function CalendarGrid() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const router = useRouter();

  const handleDayClick = (value:Date)  => {
    const year = value.getFullYear();
    const month = String(value.getMonth() + 1).padStart(2, '0');
    const day = String(value.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;

    router.push(`/contact/schedule/${formattedDate}`);
  }

  return (
    <div className="flex flex-col">
      <div className='text-center'>
        <Calendar
          value={selectedDate}
          minDate={new Date()}
          onChange={(value) => {
            if (value instanceof Date) {
              setSelectedDate(value);
            }}}
          onClickDay={(date) => handleDayClick(date)}
          className={styles.reactCalendar}
        />
      </div>
      <p>Current Selection: {selectedDate.toDateString()}</p>
    </div>
  );
}

export default CalendarGrid;