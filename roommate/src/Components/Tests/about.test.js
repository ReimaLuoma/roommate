import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import About from '../About';

afterEach(() => {
    cleanup();
})

describe('About', () => {
    test('About - test existence', () => {
        render(<About />);
        const aboutElement = screen.getByTestId('about');
        expect(aboutElement).toBeInTheDocument();
    });

    test('About - copyright text exist', () => {
        render(<About />);
        const aboutElement = screen.getByTestId('copyright');
        expect(aboutElement).toHaveTextContent('Copyright by Reima Luoma 2022-2023');
    });
    
    test('About - personal disclaimer text exist', () => {
        render(<About />);
        const aboutElement = screen.getByTestId('disclaimer-personal');
        expect(aboutElement).toHaveTextContent('This site is a project for personal usage and part of my CV. This is not commercial product.');
    });

    test('About - tmdb logo exist', () => {
        render(<About />);
        const tmdb_img = screen.getByRole('img');
        expect(tmdb_img).toHaveAttribute('src', 'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg');
        expect(tmdb_img).toHaveAttribute('alt', 'themoviedb.org');
    });

    test('About - tmdb disclaimer exist', () => {
        render(<About />);
        const aboutElement = screen.getByTestId('disclaimer-tmdb');
        expect(aboutElement).toHaveTextContent('This product uses the TMDB API but is not endorsed or certified by TMDB.');
    });
});

