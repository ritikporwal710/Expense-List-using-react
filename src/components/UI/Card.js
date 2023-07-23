import React from 'react';
import './Card.css'

const Card = (props)=>{
    const classed = 'card ' + props.className;
    return (
    <div className={classed} >{props.children}</div>
    );
}

export default Card;