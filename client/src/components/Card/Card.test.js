import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';

describe('Card Component Tests', () => {
    test('it should render Card', () => {
        render(<Card />);
        const card = document.querySelectorAll('.Card');
        expect(card.length).toEqual(1);
    });

    test('it should render Card with children', () => {
        render(
            <Card>
                <div id="test" />
            </Card>
        );
        const children = document.querySelectorAll('#test');
        expect(children.length).toEqual(1);
    });

    test('it should render Card with aligned items', () => {
        render(<Card centerItens />);
        const card = document.querySelectorAll('.Card.centerItens');
        expect(card.length).toEqual(1);
    });
})