import React from 'react';

import './Card.css';
import cookieImg from '../../img/cookie.png';

const Card = ({ children }) => {
    return (
        <div className="Card">
            <img src={cookieImg} />
            { children }
        </div>
    )
}

export default Card;