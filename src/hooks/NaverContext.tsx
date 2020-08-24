/* eslint-disable react/prop-types */
import React, { createContext, useContext, useCallback } from 'react';

import api from '../services/api';

import { CreateNaver, Naver } from '../utils/interfaces';

interface NaverContext {
  createNaver(data: CreateNaver): Promise<void>;
  updateNaver(id: string, data: Naver): Promise<void>;
  loadNavers(): Promise<Naver[]>;
  loadNaver(id: string): Promise<Naver>;
  deleteNaver(id: string): Promise<void>;
}

const NaverContext = createContext<NaverContext>({} as NaverContext);

export const NaverProvider: React.FC = ({ children }) => {
  const createNaver = useCallback(async (data: CreateNaver) => {
    await api.post('/navers', data);
  }, []);

  const updateNaver = useCallback(async (id: string, data: Naver) => {
    await api.put(`/navers/${id}`, data);
  }, []);

  const loadNavers = useCallback(async () => {
    const { data } = await api.get('/navers');

    return data;
  }, []);

  const loadNaver = useCallback(async (id: string) => {
    const { data } = await api.get(`/navers/${id}`);

    return data;
  }, []);

  const deleteNaver = useCallback(async (id: string) => {
    await api.delete(`/navers/${id}`);
  }, []);

  return (
    <NaverContext.Provider
      value={{ createNaver, updateNaver, loadNavers, loadNaver, deleteNaver }}
    >
      {children}
    </NaverContext.Provider>
  );
};

export function useNaver(): NaverContext {
  const context = useContext(NaverContext);

  return context;
}
