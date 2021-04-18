import React, { useState, useEffect, useContext, createContext } from 'react';
import Router from 'next/router';
import Cookies from 'js-cookie';

import axios from '@/lib/axios'

const authContext = createContext();

export function AuthProvider({ children }) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
    return useContext(authContext);
};

function useProvideAuth() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const getUser = async () => {
        try {
            const { data } = await axios.get('/auth')
            setUser(data);
            Cookies.set('social', true, { expires: 1 })
        } catch (error) {
            signout()
        }
        setLoading(false);
    }

    const signin = async (userData) => {
        setLoading(true);
        try {
            const body = JSON.stringify(userData)
            await axios.post('/auth', body)
            getUser();
            Router.replace('/dashboard');
        } catch (error) {
            return error.response.data
        }
    };

    const signup = async (userData) => {
        setLoading(true);
        try {
            const body = JSON.stringify(userData)
            await axios.post('/users', body)
            getUser();
            Router.replace('/dashboard');
        } catch (error) {
            return error.response.data
        }
    };

    const signout = async () => {
        setUser(false);
        Cookies.remove('social')
        await axios.post('/auth/logout')
        setLoading(false);
        Router.push('/login');
    };

    useEffect(() => {
        getUser();
    }, []);

    return {
        user,
        loading,
        signin,
        signup,
        signout
    };
}
