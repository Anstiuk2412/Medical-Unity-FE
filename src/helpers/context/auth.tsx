"use client"
import React, {createContext, useContext, useState, useEffect} from 'react';
import jsCookie from 'js-cookie';
import api from "@/helpers/axios";

interface AuthContextProps {
    user: any;
    isLogin: boolean;
    login: (username: string, password: string) => Promise<void>;
    register: (username: string, password: string) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({children}: { children: React.ReactNode }) => {
    const [user, setUser] = useState<any>(null);
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        const fetchUser = async () => {
            const token = jsCookie.get('token');
            if (token) {
                try {
                    const { data } = await api.get('/Account/userStatus');
                    setUser(data);
                    setIsLogin(true);
                } catch (error) {
                    console.error('Failed to fetch user:', error);
                }
            }
        };

        fetchUser();
    }, []);

    const login = async (email: string, password: string) => {
        try {
            await api.post('/Account/login', {
                email,
                password
            }).then(({data})=>{
                console.log(data)
                jsCookie.set('token', data.token);
                setUser(data.user);
                setIsLogin(true);
            }).catch((e: { message: string | undefined; }) => new Error(e.message));
        } catch (error) {
            console.error('Failed to login:', error);
        }
    };

    const register = async (email: string, password: string) => {
        try {
            await api.post('/Account/register', {
                email,
                password
            }).then((response)=>{
                jsCookie.set('token', response.token);
                setUser(response.user);
                setIsLogin(true);
            }).catch((e: { message: string | undefined; }) => new Error(e.message));
        } catch (error) {
            console.error('Failed to register:', error);
        }
    };

    const logout = () => {
        jsCookie.remove('token');
        setUser(null);
        setIsLogin(false);
    };

    return (
        <AuthContext.Provider value={{user, isLogin, login, register, logout}}>
            {children}
        </AuthContext.Provider>
    );
};
