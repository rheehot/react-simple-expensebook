import React, { createContext, useContext, useReducer } from 'react';
import produce from 'immer';

const initialState = [
  {
    id: 1,
    category: 'meal',
    title: '용개반점',
    amount: 7000,
  },
  {
    id: 2,
    category: 'grocery',
    title: '양배추',
    amount: 5000,
  },
  {
    id: 3,
    category: 'transportation',
    title: '택시비',
    amount: 20000,
  },
  {
    id: 4,
    category: 'housekeeping',
    title: '관리비',
    amount: 100000,
  },
  {
    id: 5,
    category: 'medical',
    title: '병원 진료',
    amount: 7000,
  },
];

function expenseReducer(state, action) {
  switch (action.type) {
    case 'CREATE_ITEM':
    case 'MODIFY_ITEM':
      return produce(state, draft => {
        draft.push({
          id: action.id,
          title: action.title,
          category: action.category,
          amount: action.amount,
        });
      });
    case 'DELETE_ITEM':
      return produce(state, draft => {
        const targetItemIdx = draft.findIndex(item => item.id === action.id);
        draft.splice(targetItemIdx, 1);
      });
    case 'FILTER_ITEM':
      return state.filter(item => {
        if (action.filter === 'all') {
          return true;
        }
        return item.category === action.filter;
      });
    default:
      throw new Error('Unhandled action');
  }
}

const ExpenseStateContext = createContext(undefined);
const ExpenseDispatchContext = createContext(undefined);

export function ExpenseProvider({ children }) {
  const [state, dispatch] = useReducer(expenseReducer, initialState);

  return (
    <ExpenseStateContext.Provider value={state}>
      <ExpenseDispatchContext.Provider value={dispatch}>
        {children}
      </ExpenseDispatchContext.Provider>
    </ExpenseStateContext.Provider>
  );
}

export function useExpenseState() {
  const ctx = useContext(ExpenseStateContext);
  if (!ctx) {
    throw new Error('ExpenseProvider is not found');
  }
  return ctx;
}

export function useExpenseDispatch() {
  const ctx = useContext(ExpenseDispatchContext);
  if (!ctx) {
    throw new Error('ExpenseProvider is not found');
  }
  return ctx;
}
