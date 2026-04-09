import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setToken } = useAuth();
    const navigate = useNavigate();

    const submitLogin = (event) => {
        event.preventDefault();
        fetch(import.meta.env.VITE_API_URL + '/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })
            .then((res) => {
                if (!res.ok) throw new Error('Codice non OK');
                return res.json();
            })
            .then((data) => {
                // salvare il token nel local storage
                setToken(data.token);
                // redirezionare
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
                // TODO: aggiungere alert
            });
    };

    return (
        <>
            <h1>Login</h1>
            <Form onSubmit={submitLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <a
                    className="ms-3 btn btn-warning"
                    href={import.meta.env.VITE_API_URL + '/auth/login-google'}
                >
                    Login with Google
                </a>
            </Form>
        </>
    );
}

export default Login;
