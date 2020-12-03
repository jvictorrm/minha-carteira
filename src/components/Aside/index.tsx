import React, { useState, useCallback } from 'react';
import {
    Container,
    Header,
    LogoImg,
    Menu,
    MenuItemLink,
    MenuItemButton,
    Title,
    ToggleMenu,
    Footer
} from './styles';

import ToggleTheme from '../ToggleTheme';
import logoImgPath from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';
import { useTheme } from '../../hooks/theme';

import {
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp,
    MdClose,
    MdMenu
} from 'react-icons/md';


const Aside: React.FC = () => {
    const { signOut } = useAuth();
    const { theme, toggleTheme } = useTheme();

    const [isToggleMenuHidden, setIsToggleMenuHidden] = useState(true);
    const [darkTheme, setDarkTheme] = useState(() => theme.title === 'dark' ? true : false);

    const handleToggleMenu = () => {
        setIsToggleMenuHidden(!isToggleMenuHidden);
    }

    const handleThemeChange = useCallback(() => {
        setDarkTheme(!darkTheme);
        toggleTheme();
    }, [darkTheme, toggleTheme]);

    console.log(isToggleMenuHidden);

    return (
        <Container isHidden={isToggleMenuHidden}>
            <Header>
                <ToggleMenu onClick={handleToggleMenu}>
                    {isToggleMenuHidden ? <MdMenu /> : <MdClose />}
                </ToggleMenu>
                <LogoImg src={logoImgPath} alt="Logo Minha Carteira" />
                <Title>Minha Carteira</Title>
            </Header>

            <Menu>
                <MenuItemLink href="/">
                    <MdDashboard />
                    Dashboard
                </MenuItemLink>

                <MenuItemLink href="/financial-transactions/entry-balance">
                    <MdArrowUpward />
                    Entradas
                </MenuItemLink>

                <MenuItemLink href="/financial-transactions/exit-balance">
                    <MdArrowDownward />
                    Saídas
                </MenuItemLink>

                <MenuItemButton onClick={signOut}>
                    <MdExitToApp />
                    Sair
                </MenuItemButton>
            </Menu>

            <Footer isHidden={isToggleMenuHidden}>
                <ToggleTheme
                    labelLeft="Light"
                    labelRight="Dark"
                    checked={darkTheme}
                    onChange={handleThemeChange}
                />
            </Footer>

        </Container>
    );
};

export default Aside;