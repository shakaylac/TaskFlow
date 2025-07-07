import './CSS/Calendar.css';
import React, { useEffect, useState } from 'react';
import arrow_right from'./assets/arrow_right.svg';
import arrow_left from'./assets/arrow_left.svg';

function Calendar() {

    const [month, setMonth] = useState('');
    const [prevMonthbtn, setPrevMonthBtn] = useState('');
    const [nextMonthbtn, setNextMonthBtn] = useState('');
    const [weekdays, setWeekdays] = useState('');
    const [days, setDays] = useState('');

    useEffect(() => {
        const date = new Date();
        let currentMonth = date.getMonth();
        let currentYear = date.getFullYear();

        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        const currentmonthName = monthNames[date.getMonth()];
        setMonth(currentmonthName);
        


    }, []);

   

    return(
        <section className='calendar-com'>
            <span className='calendar-nav'>
                <button className='previous-btn' id='previous-btn'><img src={arrow_left} className='arrow-left'></img></button>
                <p className= 'month' style={{fontFamily: 'Inter', color: '#696868', fontSize: '15px', fontWeight: 'bold' }}> {month} </p>
                <button className='next-btn' id='next-btn'><img src={arrow_right} className='arrow-right'></img></button>
                
                


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

                    </div>

                 </div>

            </span>

    


        </section>

    )
};

export default Calendar;