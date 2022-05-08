import React from 'react';
import './Header.css';
import HunterOath from '../images/hunter-oath.png'

export default function Header() {
    return (
        <header>
            <img className='hunter-oath' src={HunterOath} alt='Arcane Symbol'/>
            <h3 className='header-title'>Hunter's Travel Journal</h3>
        </header>
    )
}