import { atom } from 'recoil';

// state to whether user is logged in or not
export const moviesInfo = atom({
    key: 'movieInfo',
    default: [],
});