import { createContext, useState } from 'react';

export const ContextTheme = createContext();

function ThemeContextProvider({ children }) {
    const [theme, setTheme] = useState('light');

    return (
        <ContextTheme.Provider value={{ theme, setTheme }}>
            {children}
        </ContextTheme.Provider>
    );
}

export default ThemeContextProvider;
