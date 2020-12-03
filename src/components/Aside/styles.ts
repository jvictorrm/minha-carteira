import styled, { css } from 'styled-components';

interface IContainerProps {
    isHidden: boolean;
}

interface IFooterProps {
    isHidden: boolean;
}

export const Container = styled.div<IContainerProps>`
    grid-area: AS;    
    background-color: ${props => props.theme.colors.secondary};
    padding-left: 20px;
    border-right: 1px solid ${props => props.theme.colors.gray};

    position: relative;

    @media(max-width: 600px) {
        position: fixed;
        z-index: 2;

        width: 200px;

        height: ${props => !props.isHidden ? '100vh' : '70px'};
        overflow: hidden;

        ${props => props.isHidden && css`
            border: none;
            border-bottom: 1px solid ${props => props.theme.colors.gray};
        `};
    }
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    height: 70px;
`;

export const LogoImg = styled.img`
    height: 70%;

    @media(max-width: 600px) {
        display: none;
    }
`;

export const Title = styled.h3`
    color: ${props => props.theme.colors.white};
    margin-left: 10px;

    @media(max-width: 600px) {
        display: none;
    }
`;

export const Menu = styled.nav`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
`;

export const MenuItemLink = styled.a`
    color: ${props => props.theme.colors.info};
    text-decoration: none;
    margin: 7px 0;
    display: flex;
    align-items: center;
    

    transition: opacity .3s;

    &:hover {
        opacity: .7;
    }

    > svg {
        font-size: 20px;
        margin-right: 5px;
    }
`;

export const MenuItemButton = styled.button`
    font-size: 16px;
    color: ${props => props.theme.colors.info};
    text-decoration: none;
    border: none;
    background: none;

    margin: 7px 0;
    display: flex;
    align-items: center;
    
    transition: opacity .3s;

    &:hover {
        opacity: .7;
    }

    > svg {
        font-size: 20px;
        margin-right: 5px;
    }
`;

export const ToggleMenu = styled.button`
    display: none;

    width: 40px;
    height: 40px;

    border-radius: 5px;

    font-size: 22px;

    background-color: ${props => props.theme.colors.info};
    color: ${props => props.theme.colors.black};

    transition: opacity .3s;
    &:hover {    
        opacity: .7;
    }

    @media(max-width: 600px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const Footer = styled.footer<IFooterProps>`
    display: none;
    position: absolute;
    bottom: 10px;

    @media(max-width: 470px) {
        display: ${props => props.isHidden ? 'none' : 'flex'};
    }
`;