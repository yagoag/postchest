import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import Content from './components/Content';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #242424;
    color: #ffffff;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

const App = () => (
  <>
    <GlobalStyle />
    <Header />
    <Content />
  </>
);

export default App;
