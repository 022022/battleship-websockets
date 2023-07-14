import { styled } from 'styled-components';

export const TwoPanelWrapper = styled.div<{ $divider: boolean;}>`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    gap: 100px;
    flex-wrap: wrap;
    position: relative;
    &:before {
      ${({$divider}) =>
        {
          if($divider) {
            return `
              background-color: var(--giants-orange03);
              content: "";
              position: absolute;
              left: calc(50% - 1px);
              width: 1px;
              height: 100%;
              `
            }
          }
        }
      }
`;