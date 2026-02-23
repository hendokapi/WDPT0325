import Search from './Search.jsx';
import { ContextTheme } from '../contextes/ThemeContext.jsx';
import { useContext } from 'react';

function Header({ term, title }) {
    const { theme, setTheme } = useContext(ContextTheme);

    return (
        <header>
            <h1>{title}</h1>
            <Search term={term} />
            <button
                onClick={() => setTheme(theme == 'light' ? 'dark' : 'light')}
            >
                Change to {theme == 'light' ? 'dark' : 'light'} theme
            </button>
        </header>
    );
}

export default Header;
