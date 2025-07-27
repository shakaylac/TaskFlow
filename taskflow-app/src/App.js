

import './CSS/App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Calendar from './Pages/Calendar.js';
import Kanban from './Pages/Kanban.js';
import TimeTracking from './Pages/TimeTracking.js'; 
import Projects from './Pages/Projects.js';
import settings from './assets/settings.png';
import mail from './assets/mail.svg';
import today from './assets/today.svg';
import tab from './assets/tab.svg';
import folder_filled from './assets/folder_filled.svg';
import alarm from './assets/alarm.svg';

function App() {
  /* Header */
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

  /* Navigation */

  const gradient = 'linear-gradient(to right, #6265F7,#A24DEC)';
  const getButtonStyle = (view) => ({
    backgroundColor: activeView === view ? gradient : 'white',
    color: activeView === view ? 'white' : '#808080'
  });

      const [ activeView, setActiveView ] = useState('calendar');

       // Function to switch between views
      const switchView = (viewName) => {
        setActiveView(viewName);
      };

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
              <button  onClick={() => switchView('calendar')}
          className={activeView === 'calendar' ? 'active' : ''} style={getButtonStyle('calendar')}><img src={today} className='today-icon' alt="calendar" />Calendar</button>
            </Link>
            <Link to="/kanban">
              <button onClick={() => switchView('kanban')}
          className={activeView === 'kanban' ? 'active' : ''} style={getButtonStyle('kanban')} ><img src={tab} className='tab-icon' alt="kanban" />Kanban</button>
            </Link>
            <Link to="/projects">
              <button onClick={() => switchView('projects')}
          className={activeView === 'projects' ? 'active' : ''} style={getButtonStyle('projects')}><img src={folder_filled} className='folder_filled-icon' alt="projects" />Projects</button>
            </Link>
            <Link to="/timetracking">
            <button onClick={() => switchView('timetracking')}
          className={activeView === 'timetracking' ? 'active' : ''} style={getButtonStyle('timetracking')}><img src={alarm} className='alarm-icon' alt="timetracking" />Time Tracking</button>
            </Link>
          </div>
        </section>

        <div className="teapot"></div>
        <div className="oval"></div>
        <div className="rec-1"></div>
        <div className="rec-2"></div>
        <div className="rec-3"></div>
        <div className="container"></div>

        <Routes>
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/kanban" element={<Kanban />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/timetracking" element={<TimeTracking />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
