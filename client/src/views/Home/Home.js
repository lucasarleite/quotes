import React from 'react';
import { Link } from 'react-router-dom';

import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import './Home.css';

const Home = () => {
    return (
        <div className="Home">
            <div className="card-container">
                <Card>
                    <h3>A well-known quote, contained in a blockquote element.</h3>
                    <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                </Card>
                <Button text="Get a New Quote" />
            </div>
            <Link to="/add">
                <Button text="Add a New Quote" isFixed />
            </Link>
        </div>
    )
}

export default Home;