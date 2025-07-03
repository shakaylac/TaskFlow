import './CSS/Header.css';
import React, { useEffect, useState } from 'react';
import settings from './assets/settings.png';
import mail from './assets/mail.svg';

function Header() {
    /* Code javascript here */

    /* make a sign-in component to check and get user name. */

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
        </>
    );
};

export default Header;

