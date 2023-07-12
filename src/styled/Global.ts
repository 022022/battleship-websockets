import {createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
}

:root {
  --primary: #4b88a2ff;
  --platinum: #d3d4d9ff;
  --fire-brick: #bb0a21ff;
  --eerie-black: #252627ff;
  --snow: #fff9fbff;

  --crimson: #d7263dff;
  --cerulean: #086788ff;
  --cerulean05: #08678980;
  --cerulian005: #0867890d;
  --giants-orange: #ed5d34ff;
  --giants-orange03: #f460334d;
  --mindaro: #c5d86dff;
  --jonquil: #f1c40fff;

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
  background: var(--cerulian005);

}

.temp-board {
  display: grid;
  grid-template-columns: repeat(10, 20px);
  grid-template-rows: repeat(10, 20px);
}

.temp-cell-check {
  border: 1px solid #eee;
  background-color: darkorchid;
}

.temp-cell-uncheck {
  border: 1px solid #eee;
}

.temp-cell-unknown {
  border: 1px solid #eee;
}

.temp-cell-unknown::before {
  content: '?';
}

.temp-wounded {
  background-color: firebrick;
}
`