import { Navigate, Outlet } from 'react-router';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoutes = () => {
    // verificare se abbiamo il token dal context
    const { token } = useAuth();

    return token ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
