import React from 'react';
import './Content.css';
import Card from './Card';
import data from '../data';

export default function Content() {
    const cards = data.map(item => {
        return (
            <Card 
                key={item.id}
                item={item}
            />
        )
    })
    return (
        <div className='content-container'>
            {cards}
        </div>
    )
}