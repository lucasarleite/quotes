import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App Component Tests', () => {
    test('it should render App', () => {
        render(<App />);
        const app = document.querySelectorAll('.App');
        expect(app.length).toEqual(1);
    });
});