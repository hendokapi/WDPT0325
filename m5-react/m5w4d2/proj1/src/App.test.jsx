import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App.jsx';
import Home from './pages/Home.jsx';

it('renders EpiPosts', () => {
    // rendering
    render(<App />);

    // recuperare gli elementi
    const siteName = screen.queryByText(/EpiPosts/i);

    // interazione
    // in questo test non serve

    // verifica (assertion)
    expect(siteName).toBeInTheDocument();
});

it('renders 3 elements in aside', () => {
    render(<App />);

    const links = screen.queryAllByRole('link');

    expect(links).toHaveLength(3);
});

it('renders the fetched posts', async () => {
    render(<Home />);

    const postsLinks = await screen.findAllByRole('link');

    expect(postsLinks).toBeInTheDocument();
});
