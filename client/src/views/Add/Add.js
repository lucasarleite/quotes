import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/Button/Button';

const Add = () => {
    return (
        <div>
            <Link to="/">
                <Button text="Back to Home" isFixed />
            </Link>
        </div>
    )
}

export default Add;