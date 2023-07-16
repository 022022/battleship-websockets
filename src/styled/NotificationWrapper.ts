import { styled, keyframes } from 'styled-components';

const moveOut = keyframes`
  0% {
    transform: translate(0, -200px);
  }
  100% {
    transform: translate(0, 0);
  }
`;

const moveOff = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(0, -300px);
  }
`;

export const NotificationWrapper = styled.div<{$hide: boolean}>`
    z-index: 1000;
    position: absolute;
    padding: 20px;
    width: 300px;
    left: calc(50% - 150px);
    border: 4px solid var(--giants-orange);
    border-color: var(--giants-orange) transparent var(--giants-orange) transparent;
    background: var(--snow);
    box-shadow: 0px 4px 8px 0px var(--platinum);
    animation-iteration-count: 1;

    animation: ${({$hide}) => $hide ? moveOff : moveOut} 0.7s ease-out;

    ${({$hide}) => {
      if($hide) {
        return `
        animation-fill-mode: forwards;
        `
      }
    }};

    &:hover {
      cursor: pointer;
      border-color: var(--giants-orange03) transparent var(--giants-orange03) transparent;
      &:after {
        background: var(--cerulean);
      }
    }

    &:after {
      content: " ";
      width: 21px;
      height: 20px;
      margin: 10px auto 0;
      display: block;
      background: var(--giants-orange);
      clip-path: polygon(100% 80%, 100% 100%, 50% 70%, 0% 100%, 0 80%, 50% 50%);
    }
`;
