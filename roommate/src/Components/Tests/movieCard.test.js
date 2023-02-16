import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import MovieCard from '../MovieCard';
import { RecoilRoot } from 'recoil';

afterEach(() => {
    cleanup();
    jest.restoreAllMocks();
});

const movie = {
    "_id": "63d27292b708356420123eaa",
    "movieID": 120,
    "title": "The Lord of the Rings: The Fellowship of the Ring",
    "runtime": 179,
    "genres": [
    {
    "id": 12,
    "name": "Adventure"
    },
    {
    "id": 14,
    "name": "Fantasy"
    },
    {
    "id": 28,
    "name": "Action"
    }
    ],
    "posterpath": "/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
    "releaseDate": "2001-12-18T00:00:00.000Z",
    "description": "Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order to keep it from falling into the hands of its evil creator. Along the way, a fellowship is formed to protect the ringbearer and make sure that the ring arrives at its final destination: Mt. Doom, the only place where it can be destroyed.",
    "imdbID": "tt0120737",
    "cast": [
    {
    "adult": false,
    "gender": 2,
    "id": 109,
    "known_for_department": "Acting",
    "name": "Elijah Wood",
    "original_name": "Elijah Wood",
    "popularity": 14.191,
    "profile_path": "/7UKRbJBNG7mxBl2QQc5XsAh6F8B.jpg",
    "cast_id": 28,
    "character": "Frodo",
    "credit_id": "52fe421ac3a36847f800448f",
    "order": 0
    },
    {
    "adult": false,
    "gender": 2,
    "id": 1327,
    "known_for_department": "Acting",
    "name": "Ian McKellen",
    "original_name": "Ian McKellen",
    "popularity": 21.811,
    "profile_path": "/5cnnnpnJG6TiYUSS7qgJheUZgnv.jpg",
    "cast_id": 29,
    "character": "Gandalf",
    "credit_id": "52fe421ac3a36847f8004493",
    "order": 1
    },
    {
    "adult": false,
    "gender": 2,
    "id": 110,
    "known_for_department": "Acting",
    "name": "Viggo Mortensen",
    "original_name": "Viggo Mortensen",
    "popularity": 23.975,
    "profile_path": "/vH5gVSpHAMhDaFWfh0Q7BG61O1y.jpg",
    "cast_id": 30,
    "character": "Aragorn",
    "credit_id": "52fe421ac3a36847f8004497",
    "order": 2
    },
    {
    "adult": false,
    "gender": 2,
    "id": 1328,
    "known_for_department": "Acting",
    "name": "Sean Astin",
    "original_name": "Sean Astin",
    "popularity": 14.279,
    "profile_path": "/5oJzy6Ra0tuMEV7mfxjtqye5qUX.jpg",
    "cast_id": 36,
    "character": "Sam",
    "credit_id": "52fe421ac3a36847f80044af",
    "order": 3
    },
    {
    "adult": false,
    "gender": 2,
    "id": 1329,
    "known_for_department": "Acting",
    "name": "Billy Boyd",
    "original_name": "Billy Boyd",
    "popularity": 11.615,
    "profile_path": "/uiWlsIOakNnUgda21PJF9wswzEJ.jpg",
    "cast_id": 37,
    "character": "Pippin",
    "credit_id": "52fe421ac3a36847f80044b3",
    "order": 4
    },
    {
    "adult": false,
    "gender": 2,
    "id": 1330,
    "known_for_department": "Acting",
    "name": "Dominic Monaghan",
    "original_name": "Dominic Monaghan",
    "popularity": 7.655,
    "profile_path": "/7X0JzecoAwLXyftU1p0Ha5D9BpU.jpg",
    "cast_id": 38,
    "character": "Merry",
    "credit_id": "52fe421ac3a36847f80044b7",
    "order": 5
    },
    {
    "adult": false,
    "gender": 2,
    "id": 655,
    "known_for_department": "Acting",
    "name": "John Rhys-Davies",
    "original_name": "John Rhys-Davies",
    "popularity": 14.192,
    "profile_path": "/bfn4WvhGo2QKYtv5ynk7tKu7NnL.jpg",
    "cast_id": 33,
    "character": "Gimli",
    "credit_id": "52fe421ac3a36847f80044a3",
    "order": 6
    },
    {
    "adult": false,
    "gender": 2,
    "id": 114,
    "known_for_department": "Acting",
    "name": "Orlando Bloom",
    "original_name": "Orlando Bloom",
    "popularity": 23.21,
    "profile_path": "/lwQoA0qJTCZ6l2FH6PjmhRQjiaB.jpg",
    "cast_id": 32,
    "character": "Legolas",
    "credit_id": "52fe421ac3a36847f800449f",
    "order": 7
    },
    {
    "adult": false,
    "gender": 2,
    "id": 48,
    "known_for_department": "Acting",
    "name": "Sean Bean",
    "original_name": "Sean Bean",
    "popularity": 31.404,
    "profile_path": "/kTjiABk3TJ3yI0Cto5RsvyT6V3o.jpg",
    "cast_id": 34,
    "character": "Boromir",
    "credit_id": "52fe421ac3a36847f80044a7",
    "order": 8
    },
    {
    "adult": false,
    "gender": 2,
    "id": 65,
    "known_for_department": "Acting",
    "name": "Ian Holm",
    "original_name": "Ian Holm",
    "popularity": 8.642,
    "profile_path": "/cOJDgvgj4nMec6Inzj1H5nugTO5.jpg",
    "cast_id": 41,
    "character": "Bilbo",
    "credit_id": "52fe421ac3a36847f80044c3",
    "order": 9
    },
    {
    "adult": false,
    "gender": 1,
    "id": 882,
    "known_for_department": "Acting",
    "name": "Liv Tyler",
    "original_name": "Liv Tyler",
    "popularity": 23.5,
    "profile_path": "/9IlcL0MWSNz8YLzqSooRHCQD4Dt.jpg",
    "cast_id": 31,
    "character": "Arwen",
    "credit_id": "52fe421ac3a36847f800449b",
    "order": 10
    },
    {
    "adult": false,
    "gender": 2,
    "id": 1331,
    "known_for_department": "Acting",
    "name": "Hugo Weaving",
    "original_name": "Hugo Weaving",
    "popularity": 21.993,
    "profile_path": "/lSC8Et0PYi5zeQb3IpPkFje7hgR.jpg",
    "cast_id": 39,
    "character": "Elrond",
    "credit_id": "52fe421ac3a36847f80044bb",
    "order": 11
    },
    {
    "adult": false,
    "gender": 2,
    "id": 113,
    "known_for_department": "Acting",
    "name": "Christopher Lee",
    "original_name": "Christopher Lee",
    "popularity": 12.721,
    "profile_path": "/dA26fBr3t7mKqjn3OYW6kbD1LXM.jpg",
    "cast_id": 35,
    "character": "Saruman",
    "credit_id": "52fe421ac3a36847f80044ab",
    "order": 12
    }
    ]
    }

describe('MovieCard', () => {
    test('MovieCard - does the movie card render', () =>{
        render(<MovieCard movie={movie}/>);
        const screenElement = screen.getByTestId('moviecard');
        expect(screenElement).toBeInTheDocument();
    })

    /*
    test('MovieCard - does the onClick call handleOpen', () => {
        render(<RecoilRoot><MovieCard movie={movie}/></RecoilRoot>);

        const handleOpenSpy = jest.spyOn(<MovieCard movie={movie}/>, 'handleOpen');

        fireEvent.click(getByTestId('moviecard'));

        expect(handleOpenSpy).toHaveBeenCalled();
    });
    */
});