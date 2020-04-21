import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  width: 100%;
  background: #000000;
  height: 48px;
  font-family: 'Bitter';
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1000px;
  padding: 4px 16px;
`;

const Title = styled.div`
  text-transform: uppercase;
  font-size: 24px;
`;

const Header = () => (
  <StyledHeader>
    <Content>
      <Title>PostChest</Title>
    </Content>
  </StyledHeader>
);

export default Header;
