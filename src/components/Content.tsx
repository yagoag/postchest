import React from 'react';
import styled from 'styled-components';
import Post from './Post';

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const StyledSection = styled.section`
  width: 100%;
  max-width: 800px;
`;

const Content = () => (
  <Container>
    <StyledSection>
      <Post />
    </StyledSection>
  </Container>
);

export default Content;
