import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Add from '../Add';
import { RecoilRoot } from 'recoil';

afterEach(() => {
    cleanup();
})

describe('Add', () => {
    test('Account - add button exist', () => {
        render(<RecoilRoot><Add /></RecoilRoot>);
        const addElement = screen.getByTestId('add-button');
        expect(addElement).toBeInTheDocument();
    });

    test('Account - add button text', () => {
        render(<RecoilRoot><Add /></RecoilRoot>);
        const addElement = screen.getByTestId('add-button');
        expect(addElement).toHaveTextContent('Add');
    });
});