import { atom } from 'recoil';

// state to whether user is logged in or not
export const selectedGenreFilter = atom({
    key: 'selection',
    default: [],
});

export const selectedDurationFilter = atom({
    key: 'selection',
    default: [],
});