import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import MovieCard from '../MovieCard';
import { RecoilRoot } from 'recoil';

afterEach(() => {
    cleanup();
});