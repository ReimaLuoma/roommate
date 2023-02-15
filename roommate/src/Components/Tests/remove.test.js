import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Remove from '../Remove';

afterEach(() => {
    cleanup();
})

describe('Remove', () => {
    test('Remove - remove button exist', () => {
        render(<Remove />);
        const removeElement = screen.getByTestId('remove-button');
        expect(removeElement).toBeInTheDocument();
    });

    test('Remove - remove button text exist', () => {
        render(<Remove />);
        const removeElement = screen.getByTestId('remove-button');
        expect(removeElement).toHaveTextContent('Remove movie');
    });
});