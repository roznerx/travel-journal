import React from 'react';
import './Card.css';

export default function Card(props) {
    console.log(props.item);
    return (
        <div className='card-container'>
            <img src={props.item.imageUrl} alt='Location' className='card-img'></img>
            <div className='card-info'>
                <div className='upper-stats'>
                    <h4 className='location'>{props.item.location}</h4>
                    <h5 className='boss'>Boss: {props.item.boss}</h5>
                </div>
                <h3 className='title'>{props.item.title}</h3>
                <h5 className='dates'>{props.item.startDate} - {props.item.endDate}</h5>
                <h5 className='description'>{props.item.description}</h5>
            </div>
        </div>
    )
}