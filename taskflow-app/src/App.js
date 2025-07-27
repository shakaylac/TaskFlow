

import './CSS/App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Container from './Pages/Container.js';
import Calendar from './Pages/Calendar.js';
import Kanban from './Pages/Kanban.js';
import TimeTracking from './Pages/Time-tracking.js'; 
import Projects from './Pages/Projects.js';
import settings from './assets/settings.png';
import mail from './assets/mail.svg';
import today from './assets/today.svg';
import tab from './assets/tab.svg';
import folder_filled from './assets/folder_filled.svg';
import alarm from './assets/alarm.svg';

function App() {
  const [greeting, setGreeting] = useState('');
  const [userName, setUserName] = useState(', Kala!');

  useEffect(() => {
    const date = new Date();
    const hour = date.getHours();
    if (hour >= 5 && hour < 12) {
      setGreeting('Good Morning');
    } else if (hour >= 12 && hour < 18) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Evening');
    }
  }, []);

  return (
    <Router>
      <div>
        <header className="header">
          <h2 className="logo">TaskFlow</h2>
          <p style={{ fontFamily: 'Inter', color: '#686666', fontSize: '20PX' }}>{greeting}</p>
          <p style={{ fontFamily: 'Inter', color: '#686666', fontSize: '20PX' }}>{userName}</p>
          <div className="container-btns">
            <button className="settings" id="settings"> <img src={settings} className='settings-icon' alt="settings" /></button>
            <button className="inbox" id="inbox">  <img src={mail} className='mail-icon' alt="mail" /></button>
            <button className="new-project" id="new_project">+ New Project</button>
          </div>
        </header>
        <section className='navigation-bkg'>
          <div className='nav-btns'>
            <Link to="/calendar">
              <button className='calendar'><img src={today} className='today-icon' alt="calendar" />Calendar</button>
            </Link>
            <Link to="/kanban">
              <button className='kanban'><img src={tab} className='tab-icon' alt="kanban" />Kanban</button>
            </Link>
            <Link to="/projects">
              <button className='project'><img src={folder_filled} className='folder_filled-icon' alt="projects" />Projects</button>
            </Link>
            <button className='time-tracking'><img src={alarm} className='alarm-icon' alt="time-tracking" />Time Tracking</button>
          </div>
        </section>
        <Routes>
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/kanban" element={<Kanban />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/time-tracking" element={<TimeTracking />} />
          <Route path="/" element={<Container />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
