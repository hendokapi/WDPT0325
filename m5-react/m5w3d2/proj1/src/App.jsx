import Container from 'react-bootstrap/Container';
import Component from './components/Component.jsx';
import Counter from './components/Counter.jsx';
import Timer from './components/Timer.jsx';
import { useState } from 'react';

function App() {
    const [theme, setTheme] = useState(localStorage.getItem('theme'));
    const [timerMounted, setTimerMounted] = useState(false);

    function changeTheme() {
        let newTheme;
        if (theme == 'light') {
            newTheme = 'dark';
        } else {
            newTheme = 'light';
        }
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    }

    return (
        <Container data-bs-theme={theme}>
            <button onClick={changeTheme}>Change theme</button>
            {timerMounted && <Timer />}
            <button onClick={() => setTimerMounted(!timerMounted)}>
                {timerMounted ? 'Smonta' : 'Monta'} Timer
            </button>
            <Counter />
            <Component />
        </Container>
    );
}

export default App;
