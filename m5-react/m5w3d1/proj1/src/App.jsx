import Container from 'react-bootstrap/Container';
import Aside from './components/Aside.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import { useState } from 'react';
import ThemeContextProvider from './contextes/ThemeContext.jsx';

function App() {
    const [term, setTerm] = useState('');

    return (
        <ThemeContextProvider>
            <Container>
                <Header term={[term, setTerm]} title="Header da prop" />
                <Main term={term} />
                <Aside />
                <Footer />
            </Container>
        </ThemeContextProvider>
    );
}

export default App;
