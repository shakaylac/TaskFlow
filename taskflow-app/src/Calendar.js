import './CSS/Calendar.css';
import React, { useEffect, useState } from 'react';
import arrow_right from'./assets/arrow_right.svg';
import arrow_left from'./assets/arrow_left.svg';

function Calendar() {

    const [month, setMonth] = useState('June');

    useEffect(() => {
        const date = new Date;
        const currentmonth = date.getMonth();

        const monthNames = [
            "Janurary", "Februray", "March", "April", "May", "June",
            "July", "August", "September", "November", "Decemeber"
        ];

        const currentmonthName = monthNames[date.getMonth()];

        if(currentmonthName === currentmonth) {
            setMonth(currentmonthName);
        };


    }, []);


    return(
        <section className='calendar-com'>
            <span className='calendar-nav'>
                <button className='previous-btn' id='previous-btn'><img src={arrow_left} className='arrow-left'></img></button>
                <p className='month' style={{fontFamily: 'Inter', color: '#696868', fontSize: '15px', fontWeight: 'bold' }}> {month} </p>
                <button className='next-btn' id='next-btn'><img src={arrow_right} className='arrow-right'></img></button>
            </span>

            <div className='days'>

            </div>


        </section>

    )
};

export default Calendar;