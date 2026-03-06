import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router';
import { it, expect, describe } from '@jest/globals';
import { render, screen } from '@testing-library/react';

import Header from './Header.jsx';

describe('Header tests', () => {
    it('renders EpiPosts', () => {
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>,
        );

        const siteName = screen.queryByText(/EpiPosts/i);

        expect(siteName).toBeInTheDocument();
    });
});
