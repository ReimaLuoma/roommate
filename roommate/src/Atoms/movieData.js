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

// update main movie and displayed movie data

export const movieDataUpdate = atom ({
    key: 'movieDataUp',
    default: true,
})

// displayed movie runtime
export const movieRuntime = atom({
    key: 'movieRuntime',
    default: [],
});