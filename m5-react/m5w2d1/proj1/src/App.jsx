import Container from 'react-bootstrap/Container';
import Aside from './components/Aside.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Counter from './components/Counter.jsx';
import FormUser from './components/FormUser.jsx';
import UserList from './components/UserList.jsx';

function App() {
    return (
        <Container>
            {/* <Counter />
            <Header /> */}
            {/* <FormUser /> */}
            <UserList />
            {/* <Main />
            <Aside />
            <Footer /> */}
        </Container>
    );
}

export default App;
