import { styled } from 'styled-components';

export const Board = styled.div<{$highlight: boolean}>`
  display: grid;
  grid-template-columns: repeat(10, 28px);
  grid-template-rows: repeat(10, 28px);
  border-radius: 2px;
  background: var(--cerulean05);

  ${({$highlight}) => $highlight && `
  outline: 2px solid var(--giants-orange);
  outline-offset: 4px;
  `};
`;