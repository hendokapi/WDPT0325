import { BrowserRouter, Route, Routes } from 'react-router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';
import Aside from './components/Aside';
import Footer from './components/Footer';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Container>
                <Row>
                    <Col xs={12} md={8} className="bg-primary">
                        <main>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/about" element={<About />} />
                            </Routes>
                        </main>
                    </Col>
                    <Col xs={12} md={4} className="bg-danger">
                        <Aside />
                    </Col>
                </Row>
            </Container>

            <Footer />
        </BrowserRouter>
    );
}

export default App;
