import '../CSS/Calendar.css';
import React, { useEffect, useState } from 'react';
import arrow_right from '../assets/arrow_right.svg';
import arrow_left from '../assets/arrow_left.svg';

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [days, setDays] = useState([]);

  useEffect(() => {
    const generatedDays = generateCalendarDays(currentDate);
    setDays(generatedDays);
  }, [currentDate]);

  function isSameDate(date1, date2) {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  }

  function generateCalendarDays(date) {
    const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const firstDayIndex = firstDayOfMonth.getDay();
    const calendarStartDate = new Date(firstDayOfMonth);
    calendarStartDate.setDate(firstDayOfMonth.getDate() - firstDayIndex);

    const daysArray = [];
    for (let i = 0; i < 35; i++) {
      const day = new Date(calendarStartDate);
      day.setDate(calendarStartDate.getDate() + i);

      daysArray.push({
        date: day,
        currentMonth: day.getMonth() === date.getMonth(),
        isToday: isSameDate(day, new Date())
      });
    }

    return daysArray;
  }

  function changeMonth(offset) {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + offset);
    setCurrentDate(newDate);
  }

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  return (
    <section className='calendar-com'>
      <div className='calendar-nav'>
        <button className='previous-btn' onClick={() => changeMonth(-1)}>
          <img src={arrow_left} className='arrow-left' alt="previous" />
        </button>
        <p className='month' style={{ fontFamily: 'Inter', color: '#696868', fontSize: '15px', fontWeight: 'bold' }}>
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </p>
        <button className='next-btn' onClick={() => changeMonth(1)}>
          <img src={arrow_right} className='arrow-right' alt="next" />
        </button>
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

