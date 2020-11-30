import styled from "styled-components";

export const Container = styled.div`
  width: 48%;
  height: 300px;

  border-radius: 7px;

  background-color: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.white};

  margin: 10px 0;
  padding: 20px 20px;
`;
