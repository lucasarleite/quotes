import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import loadingImg from '../../img/loading.png';
import './Home.css';

const Home = () => {

    const [quote, setQuote] = useState(null);
    const [author, setAuthor] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const getRandomQuote = () => {
        setIsLoading(true);
        axios.get('http://localhost:5000/quotes')
            .then(({ data }) => {
                setQuote(data.quote);
                setAuthor(data.author);
                setIsLoading(false);
            })
            .catch(e => {
                setIsLoading(false);
                console.log(e);
            });
    };

    useEffect(() => {
        getRandomQuote();
    }, []);

    return (
        <div className="Home">
            <div className="card-container">
                <Card centerItens={ isLoading ? true : false }>
                    {
                        isLoading && <img id="loading" src={loadingImg} />
                    }
                    {
                        !isLoading && (
                            <>
                                <h3>{quote ? quote : 'No quotes found.'}</h3>
                                <footer className="blockquote-footer">{author}</footer>
                            </>
                        )
                    }
                </Card>
                <Button text="Get a New Quote" onClick={getRandomQuote} />
            </div>
            <Link to="/add">
                <Button text="Add a New Quote" isFixed />
            </Link>
        </div>
    )
}

export default Home;