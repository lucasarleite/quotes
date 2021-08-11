import React from 'react';

import './Button.css';

const Button = ({ text, isFixed }) => {
    return (
        <button className={`Button${ isFixed ? ' fixed' : '' }`}>
            { text }
        </button>
    )
}

export default Button;