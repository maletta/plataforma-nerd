import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #353b48;
  display:flex;
  flex-direction: column;

`;

const Main = ({ children }) => (
  <Container>
    {children}
  </Container>
);

export default Main;
