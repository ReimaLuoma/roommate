import { atom } from 'recoil';

// state to whether user is logged in or not
export const loginState = atom({
    key: 'userLoginInfo',
    default: false,
});

export const userData = atom({
    key: 'userData',
    default: {}
})