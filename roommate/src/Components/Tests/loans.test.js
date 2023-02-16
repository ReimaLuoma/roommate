import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Loans from '../Loans';
import { RecoilRoot } from 'recoil';

afterEach(() => {
    cleanup();
});

const user = {
    attributes: {
        given_name: 'Matti',
        family_name: 'Meikalainen',
        email: 'matti.meikalainen@gmail.com',
        phone_number: '+358400123456',
        sub: 'ouhaoidawiu-aoiwhdaoid-oaihwdoan'
    }
};

describe('Loans', () => {
    test('Loans - admin status component rendering', () => {
        render(<RecoilRoot><Loans user={user} admin={true}/></RecoilRoot>);
        const screenElement = screen.getByTestId('admin-button-loans');
        expect(screenElement).toBeInTheDocument();
    });

    test('Loans - admin status, no user component rendering', () => {
        render(<RecoilRoot><Loans user={user} admin={true}/></RecoilRoot>);
        const screenElement = screen.queryByTestId('user-button-loans');
        expect(screenElement).toBe(null);
    });
});