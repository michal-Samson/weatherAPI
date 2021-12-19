import React from 'react';
import Home from '../home/home';
import './menu.css';
import Favorites from '../favorites/favorites';
export default function Menu() {
debugger
    return (
        <>
            <nav className='nav' >
                <br></br>
                < Favorites />
            </nav>
            <div className='divBlack'></div>
            <Home />
            <br></br>
          
        </>
    )
}

