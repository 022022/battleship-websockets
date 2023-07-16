import { styled, keyframes } from 'styled-components';

const loader = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div<{$isInline: boolean}>`
  ${({$isInline}) => $isInline ? `
  margin: 0 20px;
  ` : `
  margin-top: 40px;
  `}

  &:after {
    content: " ";
    display: block;
    ${({$isInline}) => $isInline ? `
      width: 24px;
      height: 24px;
    ` : `
    width: 64px;
    height: 64px;
    `}

    border-radius: 50%;
    border: 4px solid var(--giants-orange);
    border-color: var(--giants-orange) transparent var(--giants-orange) transparent;
    animation: ${loader} 2s linear infinite;
  }
`;
