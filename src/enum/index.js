import React from 'react';

export const themes = {
    light: {
        foreground: '#000000',
        background: '#eeeeee'
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222'
    }
};
console.log(1111)

export const ThemeContext = React.createContext(themes.light);
