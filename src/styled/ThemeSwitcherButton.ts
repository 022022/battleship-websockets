import { styled } from 'styled-components';
import { ThemeType } from '../types/styled';

export const ThemeSwitcherButton = styled.button<{$direction: ThemeType}>`
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    background-color: ${({theme}) => theme.colors.primary005};
    border: none;
    padding: 4px 16px;
    font-size: 14px;
    border-radius: 8px;
    transition: 0.3s ease-in-out;
    color: ${({theme}) => theme.colors.primary};
    position: relative;

    &:hover {
      cursor: pointer;
      color: ${({theme}) => theme.colors.fieldsBg};
      background-color: ${({theme}) => theme.colors.primary};
      border-radius: 8px;
    }

    &:focus {
      outline: 0;
      box-shadow: 0 0 0 0.25rem ${({theme}) => theme.colors.primary05};
      border-color: ${({theme}) => theme.colors.primary};
    }
  `;