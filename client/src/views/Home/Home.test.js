import React from 'react';
import axios from 'axios';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Home from './Home';

jest.mock('axios');

describe('Home View Tests', () => {

    beforeEach(() => {
        axios.get.mockRestore();
    });

    test('it should render Home with a good response from api', async () => {
        axios.get.mockImplementation(() => {
            const promise = new Promise((resolve, reject) => {
                resolve({ data: { quote: 'quote', author: 'author' } })
            });
            return promise;
        });

        await act(async () => {
            await render(
                <MemoryRouter>
                    <Home />
                </MemoryRouter>
            );
        });

        const quote = screen.getAllByText('quote');
        expect(quote.length).toEqual(1);
    });

    test('it should render Home with a bad response from api', async () => {
        axios.get.mockImplementation(() => {
            const promise = new Promise((resolve, reject) => {
                reject();
            });
            return promise;
        });

        await act(async () => {
            await render(
                <MemoryRouter>
                    <Home />
                </MemoryRouter>
            );
        });

        const noQuote = screen.getAllByText('No quotes found.');
        expect(noQuote.length).toEqual(1);
    });
})