import React from 'react';
import {
    Container,
    Header,
    LogoImg,
    Menu,
    MenuItemLink,
    MenuItemButton,
    Title
} from './styles';

import logoImgPath from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';

import {
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp
} from 'react-icons/md';


const Aside: React.FC = () => {
    const { signOut } = useAuth();

    return (
        <Container>
            <Header>
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
        </Container>
    );
};

export default Aside;