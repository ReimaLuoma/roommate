import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import RemoveModal from '../RemoveModal';
import { RecoilRoot } from 'recoil';

afterEach(() => {
    cleanup();
})

describe('RemoveModal - components exist', () => {
    test('RemoveModal - Modal component exist', () => {
        render(<RecoilRoot><RemoveModal /></RecoilRoot>);
        const screenElement = screen.getByTestId('modal');
        expect(screenElement).toBeInTheDocument();
    });

    test('RemoveModal - Box component exist', () => {
        render(<RecoilRoot><RemoveModal /></RecoilRoot>);
        const screenElement = screen.getByTestId('box');
        expect(screenElement).toBeInTheDocument();
    });

    test('RemoveModal - Close button component exist', () => {
        render(<RecoilRoot><RemoveModal /></RecoilRoot>);
        const screenElement = screen.getByTestId('close-button');
        expect(screenElement).toBeInTheDocument();
    });
});