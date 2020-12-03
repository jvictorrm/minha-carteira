import styled, { keyframes } from "styled-components";

interface ILabelProps {
  color: string;
}

const animate = keyframes`
    0% {
        transform: translateY(100px);
        opacity: 0;
    }

    50% {
        opacity: .3;
    }

    100% {
        transform: translateY(0);
        opacity: 1;
    }
`;

export const Container = styled.div`
  width: 49%;
  min-height: 260px;

  border-radius: 7px;

  background-color: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.white};

  margin: 10px 0;

  display: flex;
  justify-content: space-between;

  animation: ${animate} .5s;

  @media(max-width: 1200px) {
    flex-direction: column;
    width: 100%;
    height: auto;
  }
`;

export const SideLeft = styled.aside`
  flex: 1;
  padding: 30px 20px;

  > h2 {
    padding-left: 16px;
    margin-bottom: 10px;
  }

`;

export const LabelContainer = styled.ul`
    list-style: none;
    overflow-y: scroll;

    max-height: 150px;
    padding-right: 15px;
    padding-left: 15px;

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

    @media(max-width: 1200px) {
      display: flex;
      height: auto;
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
        margin: 0 10px;
    }

    @media(max-width: 1200px) {
      > div {          
        height: 30px;
        width: 30px;
        line-height: 30px;
        
        font-size: 10px;
      }
    }
`;

export const SideRight = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;

  padding: 30px 0;
`;

export const ChartContainer = styled.div`
    flex: 1;
    
    min-height: 150px;
    max-width: 50%;    
`;