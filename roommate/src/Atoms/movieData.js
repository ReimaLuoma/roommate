import { atom } from 'recoil';

// main movie data
export const moviesInfo = atom({
    key: 'moviesInfo',
    default: [],
});

// displayed movie data
export const moviesDisplay = atom({
    key: 'moviesDisplay',
    default: [],
});

// displayed movie runtime
export const movieRuntime = atom({
    key: 'movieRuntime',
    default: [],
});