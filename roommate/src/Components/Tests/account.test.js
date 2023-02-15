import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Account from '../Account';

afterEach(() => {
    cleanup();
})

const user = {
    given_name: 'Matti',
    family_name: 'Meikalainen',
    email: 'matti.meikalainen@gmail.com',
    phone_number: '+358400123456',
    sub: 'ouhaoidawiu-aoiwhdaoid-oaihwdoan'
}

describe('Account', () => {
    test('Account - account button exist', () => {
        render(<Account user={user}/>);
        const accountElement = screen.getByTestId('account-button');
        expect(accountElement).toBeInTheDocument();
    });

    test('Account - account button name text', () => {
        render(<Account user={user}/>);
        const accountElement = screen.getByTestId('account-button');
        expect(accountElement).toHaveTextContent(user.given_name);
    });
});