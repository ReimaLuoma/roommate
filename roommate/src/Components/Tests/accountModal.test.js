import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import AccountModal from '../AccountModal';

afterEach(() => {
    cleanup();
})

const user = {
    given_name: 'Matti',
    family_name: 'Meikalainen',
    email: 'matti.meikalainen@gmail.com',
    phone_number: '+358400123456',
    sub: 'ouhaoidawiu-aoiwhdaoid-oaihwdoan'
};

describe('Account_Modal', () => {
    test('Account_Modal - account button exist', () => {
        render(<AccountModal user={user}/>);
        const accountElement = screen.getByTestId('user-info-1');
        expect(accountElement).toHaveTextContent(user.given_name);
    });

    test('Account_Modal - account button exist', () => {
        render(<AccountModal user={user}/>);
        const accountElement = screen.getByTestId('user-info-2');
        expect(accountElement).toHaveTextContent(user.family_name);
    });

    test('Account_Modal - account button exist', () => {
        render(<AccountModal user={user}/>);
        const accountElement = screen.getByTestId('user-info-3');
        expect(accountElement).toHaveTextContent(user.email);
    });

    test('Account_Modal - account button exist', () => {
        render(<AccountModal user={user}/>);
        const accountElement = screen.getByTestId('user-info-4');
        expect(accountElement).toHaveTextContent(user.phone_number);
    });
});
