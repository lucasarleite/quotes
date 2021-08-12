import React from 'react';
import axios from 'axios';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Add from './Add';

jest.mock('axios');

describe('Add View Tests', () => {

    beforeEach(() => {
        axios.post.mockRestore();
    });

    test('it should render Add view component', () => {
        render(
            <MemoryRouter>
                <Add />
            </MemoryRouter>
        );
        const add = document.querySelectorAll('.Add');
        expect(add.length).toEqual(1);
    });

    test('it should change quote textarea value', () => {
        render(
            <MemoryRouter>
                <Add />
            </MemoryRouter>
        );
        const textarea = document.querySelector('#quote');
        expect(textarea.innerHTML).toEqual('');

        fireEvent.change(textarea, { target: { value: 'test' } });
        expect(textarea.innerHTML).toEqual('test');
    });

    test('it should change author input value', () => {
        render(
            <MemoryRouter>
                <Add />
            </MemoryRouter>
        );
        const input = document.querySelector('#author');
        expect(input.getAttribute('value')).toEqual('');

        fireEvent.change(input, { target: { value: 'test' } });
        expect(input.getAttribute('value')).toEqual('test');
    });

    test('it should submit a quote and receive a good response', async () => {
        axios.post.mockImplementation(() => {
            const promise = new Promise((resolve, reject) => {
                resolve()
            });
            return promise;
        });

        render(
            <MemoryRouter>
                <Add />
            </MemoryRouter>
        );

        const btn = screen.getByText('Add Quote');
        const noGoodAlert = document.querySelectorAll('.alert.alert-success');
        expect(noGoodAlert.length).toEqual(0);

        await act(async () => {
            await fireEvent.click(btn);
        });

        const goodAlert = document.querySelectorAll('.alert.alert-success');
        expect(goodAlert.length).toEqual(1);
    });

    test('it should submit a quote and receive a bad response', async () => {
        axios.post.mockImplementation(() => {
            const promise = new Promise((resolve, reject) => {
                reject()
            });
            return promise;
        });

        render(
            <MemoryRouter>
                <Add />
            </MemoryRouter>
        );

        const btn = screen.getByText('Add Quote');
        const noBadAlert = document.querySelectorAll('.alert.alert-danger');
        expect(noBadAlert.length).toEqual(0);

        await act(async () => {
            await fireEvent.click(btn);
        });

        const badAlert = document.querySelectorAll('.alert.alert-danger');
        expect(badAlert.length).toEqual(1);
    });
});