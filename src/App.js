import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { ocGray3 } from './constants/style';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    background: ${ocGray3};
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
    }
`;

const AppWrapper = styled.main`
  display: flex;
  flex-direction: column;
  width: 512px;
  height: 768px;
  overflow-y: scroll;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AppWrapper />
    </>
  );
}

export default App;
