import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button Component Tests', () => {
    test('it should render a Button', () => {
        render(<Button />);
        const btn = document.querySelectorAll('.Button');
        expect(btn.length).toEqual(1);
    });

    test('it should render a Button with text', () => {
        const text = 'test'
        render(<Button text={text} />);
        const btn = screen.getByText(text);
        expect(btn).not.toBeUndefined();
    });

    test('it should render a fixed Button', () => {
        render(<Button isFixed />);
        const btn = document.querySelector('.Button');
        expect(btn.classList.contains('fixed')).toEqual(true);
    });

    test('it should trigger onClick event', () => {
        const mockClick = jest.fn();
        render(<Button onClick={mockClick} />);
        const btn = document.querySelector('.Button');
        fireEvent.click(btn);
        expect(mockClick).toHaveBeenCalled();
    });
});