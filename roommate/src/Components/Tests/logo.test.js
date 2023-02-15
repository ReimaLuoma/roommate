import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Logo from '../Logo';

afterEach(() => {
    cleanup();
})

describe('Logo', () => {
    test('Logo - test existence', () => {
        render(<Logo />);
        const logoElement = screen.getByTestId('logo');
        expect(logoElement).toBeInTheDocument();
        expect(logoElement).toHaveTextContent('ROOMMATE');
    });
});
