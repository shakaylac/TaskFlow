import { createPortal } from 'react-dom';
import '../CSS/Calendar.css';
import React, { useEffect, useState } from 'react';
import arrow_right from '../assets/arrow_right.svg';
import arrow_left from '../assets/arrow_left.svg';

function ShowHoverForm() {
  const [ showPopup, setShowPopup ] = useState(false);

}

function HoverForm() {
  return(
    <div className="popup-overlay">
      <div className="popup-content">
        <h3></h3>
        <form>
          <div>
            <input type="radio" id="project" name="add" value="proejct" />
            <label for="Create a Project">Create a Project</label>
          </div>

          <div>
            <input type="radio" id="task" name="add" value="task" />
            <label for="create task"> Create Task</label>
          </div>

          <div>
            <input type="radio" id="event" name="add" value="event" />
            <label for="create event"> Create event</label>
          </div>

          <label for="title">Title</label>
          <input type="text" id="title" name="title" required />

          <label for="date">Date</label>
          <input type="date" id="date" name="date" required />

          <label for="time">TIme</label>
          <input type="time" id="time" name="time" />

          <label for="description"></label>
          <textarea></textarea>

          <label>Choose Color</label>

          <div>
          <input type="radio" id="color" name="color" value="blue" checked />
          </div>

<div>
          <input type="radio" id="color" name="color" value="blue" checked />
          </div>

        </form>

      </div>

    </div>
  )
}

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

  /* New Event Form */
  const [newEvent, setNewEvent] = useState('');
  const [showNewEventForm, setShowNewEventForm] = useState(false);
  const [selectDate, setSelectedDate] = useState(null);
  const [formEventName, setFormEventName] = useState('');
  const [formTime, setFormTime] = useState('');
  const [formEventDescription, setFormEventDescription] = useState('');
  const [formDueDate, setFormDueDate] = useState('');
  const [formPrioty, setFormPriorty] = useState('green');

  function handleNewEventClick() {
    setShowNewEventForm(true);
  };

  const handleDayClick = (date) => {
    setSelectedDate(date);
    setShowNewEventForm(true);
  };

  const handleNewEventChange = (e) => {
    setNewEvent(e.target.value);
  };

  const handleNewEventSubmit = (e) => {
    e.preventDefault();
    if (formEventName.trim() !== '') {
      alert(`New project created: ${formEventName} for ${setSelectedDate.toLocaleDateString()}`);
      setFormEventName('');
      setFormEventDescription('');
      setShowNewEventForm(false);
      setSelectedDate(null);
    } else {
      alert('Please enter a project name.');
    }
  };

  const [newEventForm, setNewEventForm] = useState(null);

  const handleTimeChange = (e) => {
    setFormTime(e.target.value);
  };


  return (
    <section className='calendar-com'>
      <div className='calendar-nav'>
        <button className='previous-btn' onClick={() => changeMonth(-1)}>
          <img src={arrow_left} className='arrow-left' alt="previous" />
        </button>
        <p className='month' style={{ fontFamily: 'system-ui', color: '#696868', fontSize: '15px', fontWeight: 'bold' }}>
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
              onClick={() => handleDayClick(dayObj.date)}
            >
              {dayObj.date.getDate()}
            </div>
          ))}
        </div>
      </div>

      {showNewEventForm && createPortal(
        <div className='portal-container'>
          <div className='form-overlay' onClick={() => setShowNewEventForm(false)} />
            <form onSubmit={handleNewEventSubmit} className="new-event-form">
              <h3>New Event for {selectDate?.toLocaleDateString()}</h3>
              <div className="form-group">
                <label htmlFor='eventName'>Event Name</label>
                <input
                  id="eventName"
                  type='text'
                  value={formEventName}
                  onChange={(e) => setFormEventName(e.target.value)}
                  placeholder="Enter event Name"
                  />
              </div>

               <div className="form-group">
              <label htmlFor="eventDescription">Event Description</label>
              <textarea
                id="eventDescription"
                value={formEventDescription}
                onChange={(e) => setFormEventDescription(e.target.value)}
                placeholder="Enter event description" 
              />
            </div>

            <div className='form-group'>
              <label htmlFor="Set Time"> Set Time</label>
              <input
                type='time'
                id="timeInput"
                value={formTime}
                onChange={handleTimeChange}
                />
            </div>

            <div className="form-group">
              <label htmlFor="priority">Priority</label>
              <select
                id="priority"
                value={formPrioty}
                onChange={(e) => setFormPriorty(e.target.value)}
                >
                <option value="green">Low</option>
                <option value="orange">Medium</option>
                <option value="red">High</option>
              </select>
            </div>

             <div className="form-buttons">
              <button 
                type="button" 
                className="cancel-event-btn"
                onClick={() => setShowNewEventForm(false)}
              >
                Cancel
              </button>
              <button type="submit" className="submit-event-btn">
                Create Event
              </button>
            </div>

            </form>
        </div>,
        document.body
      )}

    </section>
  );
}

export default Calendar;

