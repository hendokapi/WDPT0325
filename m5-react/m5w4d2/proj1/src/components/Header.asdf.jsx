import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from './Header.jsx';

it('renders EpiPosts', () => {
    // rendering
    render(<Header />);

    // recuperare gli elementi
    const siteName = screen.queryByText(/EpiPosts/i);

    // interazione
    // in questo test non serve

    // verifica (assertion)
    expect(siteName).toBeInTheDocument();
});
