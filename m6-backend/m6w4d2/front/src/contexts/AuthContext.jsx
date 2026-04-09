import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [authUser, setAuthUser] = useState(null);
    const [searchParams] = useSearchParams();
    const jwt = searchParams.get('jwt');
    const navigate = useNavigate();

    useEffect(() => {
        if (jwt) {
            localStorage.setItem('token', jwt);
            setToken(jwt);
            navigate('/', { replace: true });
        }
    }, [jwt, navigate, setToken]);

    useEffect(() => {
        fetch(import.meta.env.VITE_API_URL + '/auth/me', {
            headers: {
                Authorization: 'Bearer ' + token,
            },
        })
            .then((res) => {
                if (!jwt && res.status === 401) {
                    setToken('');
                    localStorage.removeItem('token');
                    throw new Error('Invalid token');
                }
                return res.json();
            })
            .then((data) => setAuthUser(data))
            .catch((error) => console.log(error));
    }, [token]);

    return (
        <AuthContext.Provider
            value={{ token, setToken, authUser, setAuthUser }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
