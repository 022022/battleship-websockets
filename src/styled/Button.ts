import { styled } from 'styled-components';

export const Button = styled.button`
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    background-color: var(--cerulean005);
    border: 1px solid transparent;
    padding: 8px 24px;
    font-size: 16px;
    border-radius: 8px;
    transition: 0.3s ease-in-out;
    color: var(--cerulean);
    border-color: var(--cerulean);

    &:hover {
      cursor: pointer;
      color: var(--snow);
      background-color: var(--cerulean);
      border-color: var(--cerulean);
    }

    &:focus {
      outline: 0;
      box-shadow: 0 0 0 0.25rem var(--cerulean05);
      border-color: var(--cerulean);
    }

    &:last-child {
      margin-top: var(--margin40);
    }

    &[disabled] {
      background-color: var(--platinum);
      border-color: var(--platinum);
      color: var(--eerie-black);
      &:hover {
        cursor: auto;
      }
  }
  `;