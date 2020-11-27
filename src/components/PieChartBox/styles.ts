import styled from 'styled-components';

interface ILabelProps {
    color: string;
}

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
`;

export const SideLeft = styled.aside`
    padding: 10px 10px;

    > h2 {
        margin-bottom: 20px;
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
`;

export const SideRight = styled.main`
    display: flex;
    flex: 1;
    justify-content: center;
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
`;
