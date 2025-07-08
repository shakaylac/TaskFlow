import './CSS/Calendar.css';
import React, { useEffect, useState } from 'react';
import arrow_right from './assets/arrow_right.svg';
import arrow_left from './assets/arrow_left.svg';

function Calendar() {
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [days, setDays] = useState([]);

  useEffect(() => {
    const date = new Date();
    const currentMonth = date.getMonth();
    const currentYear = date.getFullYear();

    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    setMonth(monthNames[currentMonth]);
    setYear(currentYear);

    const generatedDays = generateCalendarDays(new Date(currentYear, currentMonth));
    setDays(generatedDays);
  }, []);

  function generateCalendarDays(date) {
    const startDate = new Date(date.getFullYear(), date.getMonth(), 1);
    const firstDayIndex = startDate.getDay();
    const currentDays = [];

    // Start from the Sunday before (or same day if Sunday)
    const gridStartDate = new Date(startDate);
    gridStartDate.setDate(startDate.getDate() - firstDayIndex);

    for (let i = 0; i < 35; i++) {
      const day = new Date(gridStartDate);
      day.setDate(gridStartDate.getDate() + i);

      currentDays.push({
        date: day,
        currentMonth: day.getMonth() === date.getMonth(),
        isToday: isSameDate(day, new Date())
      });
    }

    return currentDays;
  }

  function isSameDate(date1, date2) {
    return date1.getFullYear() === date2.getFullYear() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getDate() === date2.getDate();
  }

  return (
    <section className='calendar-com'>
      <div className='calendar-nav'>
        <button className='previous-btn'><img src={arrow_left} className='arrow-left' alt="previous" /></button>
        <p className='month' style={{ fontFamily: 'Inter', color: '#696868', fontSize: '15px', fontWeight: 'bold' }}>
          {month} {year}
        </p>
        <button className='next-btn'><img src={arrow_right} className='arrow-right' alt="next" /></button>
      </div>

      <div className='calendar-body'>
        <ol className='weekdays'>
          <li>Sun</li>
          <li>Mon</li>
          <li>Tue</li>
          <li>Wed</li>
          <li>Thu</li>
          <li>Fri</li>
          <li>Sat</li>
        </ol>

        <div className='days'>
          {days.map((dayObj, index) => (
            <div
              key={index}
              className={`calendar-day ${dayObj.currentMonth ? 'current' : 'other'} ${dayObj.isToday ? 'today' : ''}`}
            >
              {dayObj.date.getDate()}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Calendar;
