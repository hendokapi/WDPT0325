import { Navigate, Outlet } from 'react-router';
import { useAuth } from '../contexts/AuthContext';

const GuestRoutes = () => {
    // verificare se abbiamo il token dal context
    const { token } = useAuth();

    return token ? <Navigate to="/" /> : <Outlet />;
};

export default GuestRoutes;
