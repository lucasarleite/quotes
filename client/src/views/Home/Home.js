import React from 'react';

import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import './Home.css';

const Home = () => {
    return (
        <div className="Home">
            <div className="cards-container">
                <Card />
                <Button text="Get a New Quote" />
            </div>
            <Button text="Add a New Quote" isFixed />
        </div>
    )
}

export default Home;