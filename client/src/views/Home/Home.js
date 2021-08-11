import React from 'react';
import { Link } from 'react-router-dom';

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
            <Link to="/add">
                <Button text="Add a New Quote" isFixed />
            </Link>
        </div>
    )
}

export default Home;