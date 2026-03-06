import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router';
import { it, expect, describe } from '@jest/globals';
import { render, screen } from '@testing-library/react';

import Aside from './Aside.jsx';

describe('Aside tests', () => {
    it('renders 3 elements in aside', () => {
        render(
            <MemoryRouter>
                <Aside />
            </MemoryRouter>,
        );

        const links = screen.queryAllByRole('link');

        expect(links).toHaveLength(3);
    });
});
