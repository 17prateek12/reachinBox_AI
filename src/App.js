import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { Header } from "./compoenent/Header";
import { Content } from './compoenent/Content';
import { MainPage } from './compoenent/MainPage';
import { Login } from './pages/Login';

const AuthWrapper = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [token, setToken] = useState(null);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const tokenFromUrl = params.get('token') || localStorage.getItem('token');

        if (tokenFromUrl) {
            const formattedToken = tokenFromUrl.startsWith('Bearer') ? tokenFromUrl : `Bearer ${tokenFromUrl}`;
            localStorage.setItem("token", formattedToken);
            setToken(formattedToken);
            setIsAuthenticated(true);
        } else {
            navigate('/login');
        }
    }, [location, navigate]);

    if (!isAuthenticated) {
        return null; // Optionally, return a loading spinner or any other fallback UI
    }

    return (
        <div className='max-w-full h-[100vh]'>
            <Header isAuthorized={true} />
            {children}
        </div>
    );
}

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route
                    path="/"
                    element={
                        <AuthWrapper>
                            <Content />
                        </AuthWrapper>
                    }
                />
                <Route
                    path="/main"
                    element={
                        <AuthWrapper>
                            <MainPage />
                        </AuthWrapper>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
