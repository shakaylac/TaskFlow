import { createPortal } from 'react-dom';
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

  /* New Project Button */
  const [newProject, setNewProject] = useState('');
  const [showNewProjectForm, setShowNewProjectForm] = useState(false);
  const [formProjectName, setFormProjectName] = useState('');
  const [formProjectDescription, setFormProjectDescription] = useState('');
  const [formDueDate, setFormDueDate] = useState('');
  const [formPrioty, setFormPriorty] = useState('green');
  const [formUsername, setFormUsername] = useState('');
  const [formUserEmail, setFormUserEmail] = useState('');
  const [formPassword, setFormPassword] = useState('');

  const handleNewProjectClick = () => {
    setShowNewProjectForm(true);
  };

  const handleNewProjectChange = (e) => {
    setNewProject(e.target.value);
  };

  const handleNewProjectSubmit = (e) => {
    e.preventDefault();
    if (newProject.trim() !== '') {
      alert(`New project created: ${newProject}`);
      setNewProject('');
      setShowNewProjectForm(false);
    } else {
      alert('Please enter a project name.');
    }
  };


  const [newProjectForm, setNewProjectForm] = useState(null);
  
  useEffect(() => {
    const newProjectForm = document.getElementById('new_project_form'); 
    if (newProjectForm) {
      newProjectForm.addEventListener('submit', (e) => {
        e.preventDefault();
        handleNewProjectSubmit(e);
      });

    }
      const newProjectSubmitButton = document.querySelector('.submit-project-btn');
      if (newProjectSubmitButton) {}

      const newProjectCancelButton = document.querySelector('.cancel-project-btn');
      if (newProjectCancelButton) {}


  }, []);
  

   
    

  /* User Name */
  useEffect(() => { 
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      setUserName(`, ${storedName}!`);
    }
  }, []);
  const handleUserNameChange = (e) => {
    setUserName(`, ${e.target.value}!`);
    localStorage.setItem('userName', e.target.value);
  };

  /* Settings */
  const handleSettingsClick = () => { 
    const newUserName = prompt('Enter your name:');
    if (newUserName) {  
      setUserName(`, ${newUserName}!`);
      localStorage.setItem('userName', newUserName);
    }
  };
  const handleInboxClick = () => {
    alert('Inbox clicked!'); // Placeholder for inbox functionality
  } 
  
  /* Navigation */

      const [ activeView, setActiveView ] = useState('calendar');

       // Function to switch between views
      const switchView = (viewName) => {
        setActiveView(viewName);
      };

  /* Navigation Button Styles */
       const gradient = 'linear-gradient(to right, #6265F7, #A24DEC)';
  const getButtonStyle = (view) => (
    activeView === view
      ? { background: gradient, color: 'white', fontWeight: 'bold', fontFamily: 'Inter', width: '610px', height: '42px', border: 'none' }
      : { background: 'white', color: '#808080', fontFamily: 'Inter', width: '610px', height: '42px', border: 'solid 1.5px #CECECE' }
     );

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
            <button className="new-project-btn" id="new-project-btn" onClick={(handleNewProjectClick)}>+ New Project</button>
          </div>
        </header>
        <section className='navigation-bkg'>
  
           { showNewProjectForm && createPortal(
            <div className="portal-container">
              <div className="form-overlay" onClick={() => setShowNewProjectForm(false)} />
            <form onSubmit={handleNewProjectSubmit} className="new-project-form">
              <div className="form-group">
                <label htmlFor="projectName">Project Name</label>
                <input
                  id="projectName"
                  type="text"
                  value={formProjectName}
                  onChange={(e) => setFormProjectName(e.target.value)}
                  placeholder="Enter project name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="projectDescription">Description</label>
                <textarea
                  id="projectDescription"
                  value={formProjectDescription}
                  onChange={(e) => setFormProjectDescription(e.target.value)}
                  placeholder="Enter project description"
                />
              </div>

              <div className="form-dropdowns">
                <div className="form-group">
              <label htmlFor="dueDate">Due Date</label>
              <input
                id="dueDate"
                type="date"
                value={formDueDate}
                onChange={(e) => setFormDueDate(e.target.value)}
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
          </div>

                <div className="form-buttons">
            <button 
              type="button" 
              className="cancel-project-btn"
              onClick={() => setShowNewProjectForm(false)}
            > Cancel </button>

                        <button 
            type="submit" 
            className="submit-project-btn"
            >Create Project</button>
            
          </div>

                  
        </form>
        </div>,
        document.body
      )}

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
};

export default App;

//Code for User Signup and Login Form 

/* <div className="form-group">
              <label htmlFor="username">Username</label>  
              <input
                id="username"
                type="text"
                value={formUsername}
                onChange={(e) => setFormUsername(e.target.value)}
                placeholder="Enter username"
              />
            </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>  
                <input
                  id="email"
                  type="email"
                  value={formUserEmail}
                  onChange={(e) => setFormUserEmail(e.target.value)}
                  placeholder="Enter email" 
                />
              </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    type="password"
                    value={formPassword}
                    onChange={(e) => setFormPassword(e.target.value)}
                    placeholder="Enter password"  
                  />
                </div> 
                */
