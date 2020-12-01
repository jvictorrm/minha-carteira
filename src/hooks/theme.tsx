import React,
{
    createContext,
    useState,
    useContext
}
    from 'react';

import darkTheme from '../styles/themes/dark';
import lightTheme from '../styles/themes/light';

interface IThemeContext {
    toggleTheme(): void;
    theme: ITheme;
}

interface ITheme {
    title: string;

    colors: {
        primary: string;
        secondary: string;
        tertiary: string;

        white: string;
        black: string;
        gray: string;

        success: string;
        info: string;
        warning: string;
    }
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

const ThemeProvider: React.FC = ({ children }) => {
    const [theme, setTheme] = useState<ITheme>(() => {
        const storagedTheme = localStorage.getItem('@minha-carteira:theme');
        return storagedTheme ? JSON.parse(storagedTheme) : darkTheme;
    });

    const toggleTheme = () => {
        if (theme.title === 'dark') {
            setTheme(lightTheme);
            localStorage.setItem('@minha-carteira:theme', JSON.stringify(lightTheme));
        } else {
            setTheme(darkTheme);
            localStorage.setItem('@minha-carteira:theme', JSON.stringify(darkTheme));
        }
    }

    return (
        <ThemeContext.Provider value={{ toggleTheme, theme }}>
            {children}
        </ThemeContext.Provider>
    )
};

function useTheme(): IThemeContext {
    const context = useContext(ThemeContext);
    return context;
}

export { ThemeProvider, useTheme };