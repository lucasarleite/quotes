import React from 'react';

import './Button.css';

const Button = ({ text, isFixed, onClick, type = 'button' }) => {
    return (
        <button type={type} className={`Button${ isFixed ? ' fixed' : '' }`} onClick={onClick ? onClick : null} >
            { text }
        </button>
    )
}

export default Button;