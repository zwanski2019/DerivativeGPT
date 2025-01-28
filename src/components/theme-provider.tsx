import React, { ReactNode } from 'react';

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    return <div>{children}</div>;
};
