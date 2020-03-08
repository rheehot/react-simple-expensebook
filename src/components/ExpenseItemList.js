import React from 'react';
import styled from 'styled-components';
import { ExpenseItem } from './ExpenseItem';

const ItemListWrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  padding-top: 1rem;
`;

export const ExpenseItemList = () => {
  return (
    <ItemListWrapper>
      <ExpenseItem tag="meal" title="용개반점" amount="7000" />
      <ExpenseItem tag="grocery" title="양배추" amount="5000" />
      <ExpenseItem tag="transportation" title="택시비" amount="15000" />
      <ExpenseItem tag="housekeeping" title="관리비" amount="50000" />
      <ExpenseItem tag="medical" title="병원 진료" amount="7000" />
    </ItemListWrapper>
  );
};

ExpenseItemList.defaultProps = {};

ExpenseItemList.displayName = 'ExpenseItemList';
