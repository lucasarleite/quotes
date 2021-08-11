import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';

import './Add.css';

const Add = () => {
    return (
        <div className="Add">
            <Card>
                <h3>Add a new quote</h3>
                <form>
                    <label for="quote" className="form-label">Quote</label>
                    <textarea rows={3} className="form-control" id="quote" />
                    <label for="author" className="form-label">Author</label>
                    <input type="text" className="form-control" id="author" />
                </form>
            </Card>
            <Button text="Add Quote" />
            <Link to="/">
                <Button text="Back to Home" isFixed />
            </Link>
        </div>
    )
}

export default Add;