import { atom } from 'recoil';

// state to whether user is logged in or not
export const selectedGenreFilter = atom({
    key: 'genre',
    default: [],
});

export const selectedDurationFilter = atom({
    key: 'duration',
    default: [],
});

export const selectedFilter = atom({
    key: 'selection',
    default: [],
});