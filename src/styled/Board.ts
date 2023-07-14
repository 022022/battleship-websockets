import { styled } from 'styled-components';

export const Board = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 28px);
  grid-template-rows: repeat(10, 28px);

  outline: 1px solid var(--giants-orange);
outline-offset: 4px;
`;