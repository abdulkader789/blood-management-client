// AuthContext.js
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authData, setAuthData] = useState({
        userID: localStorage.getItem('userID') || null,
        token: localStorage.getItem('token') || null,
        user: {
            email: null,
            name: null,
        },
    });
    const login = (userID, token) => {
        localStorage.setItem('userID', userID);
        localStorage.setItem('token', token);

        // Update authData with the new values, including userEmail and userName
        setAuthData((prevAuthData) => ({
            ...prevAuthData,
            userID: userID,
            token: token,
        }));
    };

    const logout = () => {
        localStorage.removeItem('userID');
        localStorage.removeItem('token');

        // Update authData with null values
        setAuthData({
            userID: null,
            token: null,
            user: {
                email: null,
                name: null,
            },
        });
    };

    return (
        <AuthContext.Provider value={{ authData, setAuthData, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
