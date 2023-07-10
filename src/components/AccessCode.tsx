import { SyntheticEvent } from 'react';
import { setUpShips } from '../client/wsClient';
import { uiTextsRu } from '../uiTexts/ru';

export function AccessCode({code, gameId}: {code: string, gameId: number}) {
  function handle(e: SyntheticEvent){
    e.preventDefault();
    setUpShips(gameId);
  }
  return <>
      <p>{uiTextsRu.sendCode}</p>
      <div>{code}</div>
      <button onClick={(e) => handle(e)}>{uiTextsRu.ready}</button>
    </>
}