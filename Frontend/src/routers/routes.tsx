import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ReactNode } from 'react';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import { useAuth } from '../context/AuthContext';

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
        <BrowserRouter>
            <Routes>
                <Route path='/' element={
                    <RequireAuth>
                        <Home />
                    </RequireAuth>
                } />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </BrowserRouter>
    );
}

export default MyRoutes;
