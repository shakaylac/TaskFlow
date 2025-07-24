import '../CSS/Container.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import settings from '../assets/settings.png';
import mail from '../assets/mail.svg';
import today from '../assets/today.svg';
import tab from '../assets/tab.svg';
import folder_filled from '../assets/folder_filled.svg';
import alarm from '../assets/alarm.svg';
import Calendar from './Calendar';


function Container() {
    /* Header */
    const [greeting, setGreeting] = useState('');
    const [userName, setUserName] = useState(', Kala!');

    useEffect(() => {
        const date = new Date();
        const hour  = date.getHours();

        if (hour >= 5 && hour < 12) {
            setGreeting("Good Morning");
        } else if (hour >= 12 && hour < 18) {
            setGreeting("Good Afternoon");
        } else {
            setGreeting("Good Evening");
        }

    }, []);

    /* Navigation */



      const [isActive, setIsActive] = useState(false);
    const gradient = 'linear-gradient(to right, #6265F7,#A24DEC)';
    
    const calendarBtn = {
        backgroundColor: isActive ? gradient : 'white',
        color: '#808080'
    
    }
    
    const kanbanBtn = {
        backgroundColor: isActive ? 'white' : gradient,
        color: '#fff'
    }
    
    const projectBtn = {
        backgroundColor: isActive ? 'white' : gradient,
        color: '#fff'
    }
    
    const timeTrackingBtn = {
        backgroundColor: isActive ? 'white' : gradient,
        color: '#fff'
    }
    


    return(
        <>
        <header className="header">
                    <h2 className="logo">TaskFlow</h2>
                    <p style={{ fontFamily: 'Inter', color: '#686666', fontSize: '20PX' }}>
                        {greeting}
                    </p>
                    <p style={{ fontFamily: 'Inter', color: '#686666', fontSize: '20PX' }}>
                        {userName}
                    </p>
        
                    <div className="container-btns">
                        <button className="settings" id="settings"> <img src={settings} className='settings-icon'></img> </button>
                        <button className="inbox" id="inbox">  <img src={mail} className='mail-icon'></img> </button>
        
                        <button className="new-project" id="new_project">+ New Project</button>
                    </div>
        
                </header>

         <section className='navigation-bkg'>
                    <div className='nav-btns'>
                        <Link to="/calendar">       
                        <button className='calendar' style={{calendarBtn, backgroundImage: gradient, color: '#fff'}} onClick={() => setIsActive(!isActive)}><img src={today} className='today-icon'></img>Calendar</button>
                        </Link>
                        <Link to="/kanban">
                            <button className='kanban' style={{kanbanBtn, backgroundColor: '#fff', color: '#808080'}} onClick={() => setIsActive(!isActive)}><img src={tab} className='tab-icon'></img>Kanban</button>
                        </Link>
                        <Link to="/projects">
                            <button className='project' style={{projectBtn, backgroundColor: '#fff', color: '#808080'}} onClick={() => setIsActive(!isActive)}><img src={folder_filled} className='folder_filled-icon'></img>Projects</button>
                        </Link>     
                        
                        <button className='kanban' style={{kanbanBtn, backgroundColor: '#fff', color: '#808080'}} onClick={() => setIsActive(!isActive)}><img src={tab} className='tab-icon'></img>Kanban</button>
                        <button className='project' style={{projectBtn, backgroundColor: '#fff', color: '#808080'}} onClick={() => setIsActive(!isActive)}><img src={folder_filled} className='folder_filled-icon'></img>Projects</button>
                        <button className='time-tracking' style={{timeTrackingBtn, backgroundColor: '#fff', color: '#808080'}} onClick={() => setIsActive(!isActive)}><img src={alarm} className='alarm-icon'></img>Time Tracking</button>
                    </div>
        
                    
                </section>

                <Calendar />

        <div className="teapot"></div>
        <div className="oval"></div>
        <div className="rec-1"></div>
        <div className="rec-2"></div>
        <div className="rec-3"></div>
        <div className="container"></div>
        </>
    );
};

export default Container;