import { atom } from 'recoil';

// state to whether user is logged in or not
export const languageAndArea = atom({
    key: 'language',
    default: 'en-US',
});