import React, { useContext } from 'react';
import { ThemeContext } from './providers/ThemeProvider/ThemeProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PrivateRoutes, PublicRoutes } from './routes';
import ProtectedRoute from './components/ProtectedRoute';
import AuthProvider from './providers/Auth/AuthProvider';
function App() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <div className={`${theme}`}>
            <BrowserRouter>
                <AuthProvider>
                    <Routes>
                        {PublicRoutes.map((r, index) => (
                            <Route {...r} key={index} />
                        ))}

                        {PrivateRoutes.map((r, index) => (
                            <Route key={index} {...r} element={<ProtectedRoute> {r.element} </ProtectedRoute>} />
                        ))}
                    </Routes>
                </AuthProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
