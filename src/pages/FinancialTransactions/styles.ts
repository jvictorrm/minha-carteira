import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const Content = styled.main`
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  > div h1 {
    color: ${props => props.theme.colors.white}
  }
`;

export const Filters = styled.div`
    width: 100%;

    display: flex;
    justify-content: center;

    margin-bottom: 30px;

    .tag-filter {
        font-size: 18px;
        font-weight: 500;

        background: none;
        color: ${props => props.theme.colors.white};

        margin: 0 10px;

        opacity: 0.4;
        transition: opacity .3s;
        &:hover {
            opacity: .7;
        }

        &::after {
            content: '';
            display: block;
            width: 55px;
            margin: 0 auto;
        }
    }

    .tag-filter-recurrent::after {
        border-bottom: 10px solid ${props => props.theme.colors.success};
    }

    .tag-filter-eventual::after {
      border-bottom: 10px solid ${props => props.theme.colors.warning};
    }

    .tag-actived {
      opacity: 1;
    }
`;
