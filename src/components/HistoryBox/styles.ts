import styled from 'styled-components';

interface ILabelProps {
    color: string;
}

export const Container = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;

    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};

    border-radius: 7px;

    padding: 30px 30px;
    margin: 10px 0;
`;

export const Header = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;

    > h2 {
        margin-bottom: 10px;
        padding-left: 5px;
    }
`;

export const LabelContainer = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;

    padding-right: 20px;
`;

export const Label = styled.li<ILabelProps>`
    display: flex;
    align-items: center;
    
    margin-bottom: 7px;
    margin-left: 7px;

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

export const ChartContainer = styled.div`
    flex: 1;
    height: 300px;
`;
