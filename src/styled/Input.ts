import { styled } from 'styled-components';

export const Input = styled.input`
  padding: 8px 12px;
  font-size: 16px;
  line-height: 1.5;
  appearance: none;
  border-radius: 8px;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  color: var(--cerulean);
  background-color: #fff;
  border: 1px solid var(--cerulean05);

  &:focus{
      outline: 0;
      box-shadow: 0 0 0 0.25rem var(--cerulean05);
      border-color: var(--cerulean);
  }
  `;