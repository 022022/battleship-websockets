import {createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  color: var(--eerie-black);
}

:root {
  --platinum: #d3d4d9ff;
  --eerie-black: #252627ff;
  --snow: #fff9fbff;
  --cerulean: #086788ff;
  --cerulean05: #08678980;
  --cerulean025: #08678940;
  --cerulean005: #0867890d;
  --giants-orange: #ed5d34ff;
  --giants-orange03: #f460334d;
  --white005: #ffffff0d;
  --white05: #ffffff80;
  --margin40: 40px;
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  box-sizing: border-box;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  background: var(--cerulean005);
}
`