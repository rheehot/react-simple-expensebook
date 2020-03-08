import React, { useMemo } from 'react';
import styled from 'styled-components';
import { ocGray5, ocGray9, ocRed8 } from '../constants/style';

const HeadWrapper = styled.section`
  color: ${ocGray9};
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${ocGray5};

  h1 {
    margin: 0;
    font-size: 2rem;
  }

  h3 {
    margin: 1rem 0 0 0;
    font-size: 1.2rem;
  }

  h3.total-expense strong {
    color: ${ocRed8};
  }
`;

export const ExpensebookHead = () => {
  const formattedToday = useMemo(
    () =>
      new Date().toLocaleString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
    []
  );

  return (
    <HeadWrapper>
      <h1>오늘의 지출</h1>
      <h3>{formattedToday}</h3>
      <h3 className="total-expense">
        총 지출: <strong>-30000원</strong>
      </h3>
    </HeadWrapper>
  );
};

ExpensebookHead.defaultProps = {};

ExpensebookHead.displayName = 'ExpensebookHead';
