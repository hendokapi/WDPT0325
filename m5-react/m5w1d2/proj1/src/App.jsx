import Container from 'react-bootstrap/Container';
import Aside from './components/Aside.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';

function App() {
    return (
        <Container>
            <Header />
            <Main />
            <Aside />
            <Footer />
        </Container>
    );
}

export default App;
