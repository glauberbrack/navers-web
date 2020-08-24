import React from 'react';

import { AuthProvider } from './auth';
import { NaverProvider } from './NaverContext';

const AppProvider: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <NaverProvider>{children}</NaverProvider>
    </AuthProvider>
  );
};

export default AppProvider;
