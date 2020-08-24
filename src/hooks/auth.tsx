/* eslint-disable react/prop-types */
import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

interface SignInCredentialsUser {
  email: string;
  password: string;
}

interface User {
  id: string;
  email: string;
}

interface AuthState {
  token: string;
  user: User;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredentialsUser): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@Navers:token');
    const user = localStorage.getItem('@Navers:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/users/login', { email, password });
    console.log(email, password);

    const { token, id } = response.data;

    localStorage.setItem('@Navers:token', token.token);
    localStorage.setItem(
      '@Navers:user',
      JSON.stringify({ user: { id, email } }),
    );

    setData({ token, user: { id, email } });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Navers:token');
    localStorage.removeItem('@Navers:user');

    setData({} as AuthState);
  }, []);
  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used with and AuthProvider');
  }

  return context;
}
