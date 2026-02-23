import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useContext, useEffect, useState } from 'react';
import CardUser from './CardUser';
import { ContextTheme } from '../contextes/ThemeContext';

function Main({ term }) {
    const { theme } = useContext(ContextTheme);

    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    // const [term, setTerm] = useState('ch');

    useEffect(() => {
        setIsLoading(true);
        setIsError(false);
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                if (!res.ok) throw new Error('Error');
                return res.json();
            })
            .then((data) => {
                return new Promise((resolve) => {
                    setTimeout(() => resolve(data), 1000);
                });
            })
            .then((data) => {
                console.log(data);
                setUsers(data);
                // setUsers([]);
            })
            .catch((error) => setIsError(true))
            .finally(() => setIsLoading(false));
    }, []);

    useEffect(() => {
        setFilteredUsers(
            users.filter((u) =>
                u.name.toLowerCase().includes(term.toLowerCase()),
            ),
        );
    }, [users, term]);

    return (
        <main>
            <Container fluid>
                <h1>Theme: {theme}</h1>
                {isLoading ? (
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                ) : isError ? (
                    <h2>Errore nello scaricamento dei dati...</h2>
                ) : filteredUsers.length === 0 ? (
                    <h2>Non ci sono risultati</h2>
                ) : (
                    <Row>
                        {filteredUsers.map((user) => (
                            <CardUser
                                key={user.id}
                                name={user.name}
                                email={user.email}
                            />
                        ))}
                    </Row>
                )}
            </Container>
        </main>
    );
}

export default Main;
