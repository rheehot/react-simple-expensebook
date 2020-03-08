import React from 'react';
import styled from 'styled-components';

const PageBody = styled.main`
  display: flex;
  flex-direction: column;
  width: 32rem;
  height: 48rem;
  padding: 2rem;
  background: white;
  border-radius: 1rem;
  overflow-y: scroll;
`;

export const ExpensebookPage = () => {
  return <PageBody />;
};

ExpensebookPage.defaultProps = {};

ExpensebookPage.displayName = 'ExpensebookPage';
