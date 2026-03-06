import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router';
import { it, expect, describe, jest } from '@jest/globals';
import { render, screen } from '@testing-library/react';

import Home from './Home.jsx';

// crea un contenitore di test (facoltativo)
describe('Home tests', () => {
    // it o test crea gli effettivi test
    it('renders the fetched posts', async () => {
        // mock della fetch
        globalThis.fetch = jest.fn(() =>
            Promise.resolve({
                status: 200,
                ok: true,
                json: () =>
                    Promise.resolve(
                        // qui va il body di una risposta tipo
                        {
                            posts: [
                                { id: 1, title: 'Post 1' },
                                { id: 2, title: 'Post 2' },
                                { id: 3, title: 'Post 3' },
                            ],
                        },
                    ),
            }),
        );

        render(
            // mettere il componente in un MemoryRouter se utilizza
            // componenti da react router come il Link
            <MemoryRouter>
                <Home />
            </MemoryRouter>,
        );

        const postsLinks = await screen.findAllByRole('link');

        expect(postsLinks).toHaveLength(3);
    });
});
