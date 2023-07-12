import { styled } from 'styled-components';

export const Button = styled.button`
    cursor: pointer;
    xoutline: 0;
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    background-color: var(--cerulian005);
    border: 1px solid transparent;
    padding: 6px 12px;
    font-size: 1rem;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    color: var(--cerulean);
    border-color: var(--cerulean);

    &:hover {
      color: #fff;
      background-color: var(--cerulean);
      border-color: var(--cerulean);
    }

    &:focus {
      outline: 0;
      box-shadow: 0 0 0 0.25rem var(--cerulean05);
      border-color: var(--cerulean);
    }

    &:last-child {
      margin-top: 40px;
    }
  `