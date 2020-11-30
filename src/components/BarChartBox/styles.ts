import styled from "styled-components";

interface ILabelProps {
  color: string;
}

export const Container = styled.div`
  width: 49%;
  min-height: 260px;

  border-radius: 7px;

  background-color: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.white};

  margin: 10px 0;

  display: flex;
  justify-content: space-between;
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