import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Aside from './Aside.jsx';

it('renders 3 elements in aside', () => {
    render(<Aside />);

    const links = screen.queryAllByRole('link');

    expect(links).toHaveLength(3);
});
