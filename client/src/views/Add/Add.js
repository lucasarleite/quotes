import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';

import './Add.css';

const Add = () => {

    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [callStatus, setCallStatus] = useState(false);

    const handleChangeQuote = (e) => {
        setQuote(e.target.value);
    }

    const handleChangeAuthor = (e) => {
        setAuthor(e.target.value);
    }

    const clearForm = () => {
        setQuote('');
        setAuthor('');
    }

    const handleAddQuote = () => {
        setCallStatus(false);
        setIsLoading(true);
        axios.post('http://localhost:5000/quotes', { quote, author})
            .then(() => {
                setIsLoading(false);
                setCallStatus('success');
                clearForm();
            })
            .catch(e => {
                setIsLoading(false);
                setCallStatus('danger');
                console.log(e);
            });
    }

    return (
        <div className="Add">
            <Card>
                <h3>Add a new quote</h3>
                <form>
                    <label htmlFor="quote" className="form-label">Quote</label>
                    <textarea rows={3} className="form-control" id="quote" onChange={handleChangeQuote} value={quote} disabled={ isLoading ? true : false } />
                    <label htmlFor="author" className="form-label">Author</label>
                    <input type="text" className="form-control" id="author" value={author} onChange={handleChangeAuthor} disabled={ isLoading ? true : false } />
                </form>
                {
                    callStatus &&
                    (
                        <div className={`alert alert-${callStatus}`} role="alert">
                            { callStatus === 'success' ? 'Quote successfully added!' : 'Error on adding quote' }
                        </div>
                    )
                }
            </Card>
            <Button text="Add Quote" onClick={handleAddQuote} />
            <Link to="/">
                <Button text="Back to Home" isFixed />
            </Link>
        </div>
    )
}

export default Add;