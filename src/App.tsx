import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles'
import darkTheme from './styles/themes/dark';
import lightTheme from './styles/themes/light';
import Routes from './routes';

const App: React.FC = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <GlobalStyles />
            <Routes />
        </ThemeProvider>
    );
}

export default App;