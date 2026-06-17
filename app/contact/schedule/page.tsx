import React from 'react'
import CalendarGrid from './calender'

const schedule = () => {

  return (
    <div>
      <div className='flex flex-col items-center justify-center gap-4 p-4'>
        <div className='text-3xl font-bold text-blue-950'>Select a date:</div>
        <CalendarGrid/>
        <div>When you have selected an apporpiate date click Schedule</div>
      </div>
    </div>
  )
}

export default schedule