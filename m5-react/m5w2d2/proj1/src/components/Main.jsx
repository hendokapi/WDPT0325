import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import { useEffect, useState } from 'react';

function Main() {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        setIsError(false);
        fetch('https://jsonplaceholder.typicode.com/usersasdf')
            .then((res) => {
                if (!res.ok) throw new Error('Error');
                return res.json();
            })
            .then((data) => {
                return new Promise((resolve) => {
                    setTimeout(() => resolve(data), 3000);
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

    return (
        <main>
            <Container fluid>
                {isLoading ? (
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                ) : isError ? (
                    <h2>Errore nello scaricamento dei dati...</h2>
                ) : users.length === 0 ? (
                    <h2>Non ci sono risultati</h2>
                ) : (
                    <ul>
                        {users.map((user) => (
                            <li key={user.id}>{user.email}</li>
                        ))}
                    </ul>
                )}
            </Container>
        </main>
    );
}

export default Main;
