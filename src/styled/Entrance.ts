import { styled } from 'styled-components';

export const EntranceWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    gap: 100px;
    flex-wrap: wrap;
    position: relative;
    &:before {
      background-color: var(--giants-orange03);
      content: "";
      position: absolute;
      left: calc(50% - 1px);
      width: 1px;
      height: 100%;
    }
`;