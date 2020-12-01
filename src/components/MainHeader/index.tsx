import React, { useCallback, useMemo, useState } from 'react';

import { useTheme } from '../../hooks/theme';
import emojis from '../../utils/emojis';
import ToggleTheme from '../ToggleTheme';

import {
    Container,
    Profile,
    Welcome,
    UserName
} from './styles';

const MainHeader: React.FC = () => {
    const { toggleTheme, theme } = useTheme();

    const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false);

    const emoji = useMemo(() => {
        const indice = Math.floor(Math.random() * emojis.length);
        return emojis[indice];
    }, []);

    const handleThemeChange = useCallback(() => {
        setDarkTheme(!darkTheme);
        toggleTheme();
    }, [darkTheme, toggleTheme]);

    return (
        <Container>
            <ToggleTheme
                labelLeft="Light"
                labelRight="Dark"
                checked={darkTheme}
                onChange={handleThemeChange}
            />

            <Profile>
                <Welcome>Olá, {emoji}</Welcome>
                <UserName>João Victor</UserName>
            </Profile>
        </Container>
    );
}

export default MainHeader;