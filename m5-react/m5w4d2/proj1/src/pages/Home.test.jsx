import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router';
import { it, expect, describe, jest } from '@jest/globals';
import { render, screen } from '@testing-library/react';

import Home from './Home.jsx';

describe('Home tests', () => {
    it('renders the fetched posts', async () => {
        globalThis.fetch = jest.fn(() =>
            Promise.resolve({
                json: () =>
                    Promise.resolve({
                        posts: [
                            { id: 1, title: 'Post 1' },
                            { id: 2, title: 'Post 2' },
                            { id: 3, title: 'Post 3' },
                        ],
                    }),
            }),
        );

        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>,
        );

        const postsLinks = await screen.findAllByRole('link');

        expect(postsLinks).toHaveLength(3);
    });
});
