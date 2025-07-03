import './CSS/Navigation.css';

function Navigation() {
    return(
        <section className='navigation-bkg'>
            <div className='nav-btns'>
                <button className='calendar'><img src='./assets/today.svg'></img>Calendar</button>
                <button className='kanban'><img src='./assets/tab.svg'></img>Kanban</button>
                <button className='project'><img src='./assets/folder_filled.svg'></img>Projects</button>
                <button className='time-tracking'><img src='./assets/alarm.svg'></img>Time Tracking</button>
            </div>
            

        </section>
    
    );
};

export default Navigation;