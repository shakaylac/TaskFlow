import '../CSS/Container.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Calendar from './Calendar';


function Container() {
   

   
    return(
       <>
         
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