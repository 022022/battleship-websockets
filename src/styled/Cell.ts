import { styled } from 'styled-components';
import { CELL_STATES } from '../constants';

export const Cell = styled.div<{ $state: CELL_STATES; $isActive: boolean}>`
  border: ${({$state}) => $state === CELL_STATES.UNKNOWN ? `1px solid var(--cerulean05)` : `1px solid var(--white005)`};
  width: 28px;
  height: 28px;
  border-radius: 2px;
  background: ${({$state}) => {
      switch($state) {
        case CELL_STATES.CHECK: {
          return `var(--cerulean025)`;
        }
        case CELL_STATES.WOUNDED: {
          return `radial-gradient(50% 50% at 50% 50%, var(--giants-orange) 40%, var(--white05) 55%, var(--cerulean025) 65%);`;
        }
        case CELL_STATES.UNKNOWN: {
          return `var(--cerulean05)`;
        }
        default: {
          return `var(--cerulean)`;
        }
      }
    }};

  &:before {
    ${({$state}) => $state === CELL_STATES.UNKNOWN && `
      content: '?';
      color: var(--white05);
      ` };
    }

  &:hover {
    ${({$isActive}) => {
      if($isActive){
        return `
        cursor: pointer;
        transition: 0.3s ease-in-out;
        box-shadow: 0px 0px 8px 4px var(--white05);
        border: 1px solid var(--white05);
        z-index: 1;
      `}
      }
    }
  }

`;
