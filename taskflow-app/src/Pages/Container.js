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
   


    return(
        <>
       

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