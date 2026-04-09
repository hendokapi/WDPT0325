import { useAuth } from '../contexts/AuthContext';

function MeProfile() {
    const { authUser } = useAuth();

    return (
        <>
            <h1>
                {authUser.firstName} {authUser.lastName}
            </h1>
        </>
    );
}

export default MeProfile;
