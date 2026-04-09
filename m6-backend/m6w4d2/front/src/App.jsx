import { AuthProvider } from './contexts/AuthContext';
import Container from 'react-bootstrap/Container';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import MeProfile from './pages/MeProfile';
import Login from './pages/Login';
import ProtectedRoutes from './pages/ProtectedRoutes';
import GuestRoutes from './pages/GuestRoutes';
import RecipeDetails from './pages/RecipeDetails';
import Register from './pages/Register';

function App() {
    return (
        <HashRouter>
            <AuthProvider>
                <Header></Header>
                <Container>
                    <main>
                        <Routes>
                            {/* rotte visitabili da loggato e da guest */}
                            <Route path="/" element={<Home />} />
                            <Route
                                path="/recipes/:recipeId"
                                element={<RecipeDetails />}
                            />

                            {/* rotte protette (solo per i loggati) */}
                            <Route element={<ProtectedRoutes />}>
                                <Route path="/me" element={<MeProfile />} />
                                {/* <Route path="/me" element={<MePage />} /> */}
                            </Route>

                            {/* rotte solo per i non loggati */}
                            <Route element={<GuestRoutes />}>
                                <Route path="/login" element={<Login />} />
                                <Route
                                    path="/register"
                                    element={<Register />}
                                />
                            </Route>
                        </Routes>
                    </main>
                </Container>
                <Footer></Footer>
            </AuthProvider>
        </HashRouter>
    );
}

export default App;
