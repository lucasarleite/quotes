import React from 'react';

import './Card.css';
import cookieImg from '../../img/cookie.png';

const Card = () => {
    return (
        <div className="Card">
            <img src={cookieImg} />
            <h3>A well-known quote, contained in a blockquote element.</h3>
            <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
        </div>
    )
}

export default Card;