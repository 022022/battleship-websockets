import { styled } from 'styled-components';
import { CELL_STATES } from '../constants';

export const Cell = styled.div<{ $state: CELL_STATES; $isActive: boolean}>`
  border: 1px solid var(--white005);
  width: 28px;
  height: 28px;
  background-color: ${({$state}) => {
      switch($state) {
        case CELL_STATES.CHECK: {
          return `var(--cerulean025)`
        }
        default: {
          return `var(--cerulean)`;
        }
      }
    }};


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

`

/*

.temp-cell-unknown {
  border: 1px solid #eee;
}

.temp-cell-unknown::before {
  content: '?';
}

.temp-wounded {
  background-color: firebrick;
}
*/