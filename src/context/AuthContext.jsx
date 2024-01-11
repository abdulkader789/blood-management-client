// AuthContext.js
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [jwtToken, setJwtToken] = useState(localStorage.getItem('jwtToken') || null);

    const login = (token) => {
        setJwtToken(token);
        localStorage.setItem('jwtToken', token);
    };

    const logout = () => {
        setJwtToken(null);
        localStorage.removeItem('jwtToken');
    };

    return (
        <AuthContext.Provider value={{ jwtToken, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
