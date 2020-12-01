import React from 'react';
import {
    Container,
    Header,
    LogoImg,
    Menu,
    MenuItemLink,
    Title
} from './styles';
import logoImgPath from '../../assets/logo.svg';
import {
    MdDashboard,
    MdArrowDownward,
    MdArrowUpward,
    MdExitToApp
} from 'react-icons/md';


const Aside: React.FC = () =>
    (
        <Container>
            <Header>
                <LogoImg src={logoImgPath} alt="Logo Minha Carteira" />
                <Title>Minha Carteira</Title>
            </Header>

            <Menu>
                <MenuItemLink href="/dashboard">
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
                <MenuItemLink href="#">
                    <MdExitToApp />
                    Sair
                </MenuItemLink>
            </Menu>
        </Container>
    );

export default Aside;