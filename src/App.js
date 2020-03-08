import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { ocGray3 } from './constants/style';
import { ExpensebookPage } from './components/ExpensebookPage';

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
    height: 100vh;
    
    background: ${ocGray3};
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
    }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <ExpensebookPage />
    </>
  );
}

export default App;
