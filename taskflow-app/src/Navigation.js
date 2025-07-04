import './CSS/Navigation.css';
import today from './assets/today.svg';
import tab from './assets/tab.svg';
import folder_filled from './assets/folder_filled.svg';
import alarm from './assets/alarm.svg';
import  React, { useState, useRef } from 'react';

function Navigation() {

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
        <section className='navigation-bkg'>
            <div className='nav-btns'>
                <button className='calendar' style={{calendarBtn, backgroundImage: gradient, color: '#fff'}} onClick={() => setIsActive(!isActive)}><img src={today} className='today-icon'></img>Calendar</button>
                <button className='kanban' style={{kanbanBtn, backgroundColor: '#fff', color: '#808080'}} onClick={() => setIsActive(!isActive)}><img src={tab} className='tab-icon'></img>Kanban</button>
                <button className='project' style={{projectBtn, backgroundColor: '#fff', color: '#808080'}} onClick={() => setIsActive(!isActive)}><img src={folder_filled} className='folder_filled-icon'></img>Projects</button>
                <button className='time-tracking' style={{timeTrackingBtn, backgroundColor: '#fff', color: '#808080'}} onClick={() => setIsActive(!isActive)}><img src={alarm} className='alarm-icon'></img>Time Tracking</button>
            </div>

            
        </section>
    
    );
};

export default Navigation;