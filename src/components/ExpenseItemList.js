import React from 'react';
import styled from 'styled-components';
import { ExpenseItem } from './ExpenseItem';
import { useExpenseState } from '../contexts/ExpenseContext';

const ItemListWrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  padding-top: 1rem;
`;

export const ExpenseItemList = () => {
  const expenses = useExpenseState();

  return (
    <ItemListWrapper>
      {expenses.map(expense => (
        <ExpenseItem
          key={expense.id}
          category={expense.category}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </ItemListWrapper>
  );
};

ExpenseItemList.defaultProps = {};

ExpenseItemList.displayName = 'ExpenseItemList';
