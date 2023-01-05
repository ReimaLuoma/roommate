import { atom } from 'recoil';

// state to whether user is logged in or not
export const selectedFilterItem = atom({
    key: 'selection',
    default: [],
});