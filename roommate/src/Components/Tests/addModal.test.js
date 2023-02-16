import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddModal from '../AddModal';
import { RecoilRoot } from 'recoil';

afterEach(() => {
    cleanup();
});

describe('AddModal - components exist', () => {
    test('AddModal - Modal component exist', () => {
        render(<RecoilRoot><AddModal /></RecoilRoot>);
        const screenElement = screen.getByTestId('modal');
        expect(screenElement).toBeInTheDocument();
    });

    test('AddModal - Box component exist', () => {
        render(<RecoilRoot><AddModal /></RecoilRoot>);
        const screenElement = screen.getByTestId('box');
        expect(screenElement).toBeInTheDocument();
    });

    test('AddModal - Close button component exist', () => {
        render(<RecoilRoot><AddModal /></RecoilRoot>);
        const screenElement = screen.getByTestId('close-button');
        expect(screenElement).toBeInTheDocument();
    });
});