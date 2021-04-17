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
            setUser(false);
            Cookies.remove('social')
            Cookies.remove('token')
            Router.push('/login');
        }
        setLoading(false);
    }

    const signin = async (userData) => {
        setLoading(true);
        try {
            const body = JSON.stringify(userData)
            const { data } = await axios.post('/auth', body)
            Cookies.set('token', data.token, { expires: 1 });
            getUser();
            Router.replace('/');
        } catch (error) {
            return error.response.data
        }
    };

    const signup = async (userData) => {
        setLoading(true);
        try {
            const body = JSON.stringify(userData)
            const { data } = await axios.post('/users', body)
            Cookies.set('token', data.token, { expires: 1 });
            getUser();
            Router.replace('/');
        } catch (error) {
            return error.response.data
        }
    };

    const signout = () => {
        setUser(false);
        Cookies.remove('social')
        Cookies.remove('token')
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
