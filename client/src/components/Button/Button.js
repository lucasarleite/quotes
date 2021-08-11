import React from 'react';

import './Button.css';

const Button = ({ text, isFixed, type = 'button' }) => {
    return (
        <button type={type} className={`Button${ isFixed ? ' fixed' : '' }`}>
            { text }
        </button>
    )
}

export default Button;