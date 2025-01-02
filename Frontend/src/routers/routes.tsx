import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ReactNode } from 'react';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import { useAuth } from '../context/AuthContext';
import Preparaciones from '../pages/Preparaciones';
import DetallePreparacion from '../pages/DetallePreparacion';
import ScrollToTop from './scrollTop';
import CrearResena from '../pages/CrearResena';

interface AuthContextProviderProps {
    children: ReactNode;
}

function MyRoutes() {
    const { user } = useAuth(); // Asegurarse de obtener correctamente el user desde el contexto

    const RequireAuth = ({ children }: AuthContextProviderProps) => {
        // Verificamos si el usuario está autenticado
        if (!user) {
            return <Navigate to="/login" />; // Redirigimos a la página de login si no está autenticado
        }
        return children; // Renderizamos el componente hijo si está autenticado
    };

    return (
        <Router>
            <ScrollToTop/>
            <Routes>
                <Route path='/' element={
                    <RequireAuth>
                        <Home />
                    </RequireAuth>
                } />
                <Route path='/crear-resena' element={
                    <RequireAuth>
                        <CrearResena />
                    </RequireAuth>
                } />
                <Route path='/preparaciones' element={
                    <RequireAuth>
                        <Preparaciones />
                    </RequireAuth>
                } />
                <Route path='/preparaciones/:title' element={
                    <RequireAuth>
                        <DetallePreparacion />
                    </RequireAuth>
                } />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </Router>
    );
}

export default MyRoutes;
