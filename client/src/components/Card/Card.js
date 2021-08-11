import React from 'react';

import './Card.css';
import cookieImg from '../../img/cookie.png';

const Card = ({ children, centerItens }) => {
    return (
        <div className={`Card${ centerItens ? ' centerItens' : '' }`}>
            <img id="cookie" src={cookieImg} />
            { children }
        </div>
    )
}

export default Card;