import styled, { keyframes } from 'styled-components';

interface ILabelProps {
    color: string;
}

const animate = keyframes`
    0% {
        transform: translateX(-100px);
        opacity: 0;
    }

    50% {
        opacity: .3;
    }

    100% {
        transform: translateX(0);
        opacity: 1;
    }
`;

export const Container = styled.div`
    width: 49%;
    height: 250px;
    
    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};

    border-radius: 7px;

    margin: 10px 0;
    padding: 15px 20px;

    display: flex;
    justify-content: space-between;

    animation: ${animate} .5s;

    @media(max-width: 770px) {
        width: 100%;
    }    
`;

export const SideLeft = styled.aside`
    padding: 10px 10px;

    > h2 {
        margin-bottom: 20px;
    }

    @media(max-width: 1345px) {
        padding: 0 15px 5px;
        margin-bottom: 7px;

        > h2 {
            margin-top: 15px;
            margin-bottom: 7px;
        }
    }

    @media(max-width: 420px) {
        padding: 15px;
        margin-bottom: 7px;
    }
`;

export const LabelContainer = styled.ul`
    list-style: none;
    overflow-y: scroll;
    max-height: 150px;
    padding-right: 15px;

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.colors.secondary};
        border-radius: 10px;
    }

    ::-webkit-scrollbar-track {
        background-color: ${props => props.theme.colors.tertiary};
    }

    @media(max-width: 1345px) {
        display: flex;
        flex-direction: column;
    }
`;

export const Label = styled.div<ILabelProps>`
    display: flex;
    align-items: center;
    
    margin-bottom: 7px;    

    > div{
        background-color: ${props => props.color};
        
        height: 45px;
        width: 45px;

        border-radius: 5px;
        
        display: flex;
        align-items: center;
        justify-content: center;
        
        font-size: 14px;
    }

    > span {
        margin-left: 5px;
    }

    @media(max-width: 1345px) {
        font-size: 14px;
        margin: 3px 0;

        > div {
            height: 35px;
            width: 35px;
            line-height: 35px;
        }

        > span {
            margin-left: 7px;
        }
    }
`;

export const SideRight = styled.main`
    display: flex;
    flex: 1;
    justify-content: center;    

    @media(max-width: 1345px) {
        height: 100%;
        width: 100%;
    }
`;
