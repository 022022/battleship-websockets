import { SyntheticEvent } from 'react';
import { setUpShips } from '../client/wsClient';
import { uiTextsRu } from '../uiTexts/ru';
import { AccessCodeWrapper } from '../styled/AccessCode';
import { Button } from '../styled/Button';
import { Code } from '../styled/Code';

export function AccessCode({code, gameId}: {code: string, gameId: number}) {
  function handle(e: SyntheticEvent){
    e.preventDefault();
    setUpShips(gameId);
  }
  return <AccessCodeWrapper>
      <p>{uiTextsRu.sendCode}</p>
      <Code>{code}</Code>
      <Button onClick={(e: SyntheticEvent) => handle(e)}>{uiTextsRu.ready}</Button>
    </AccessCodeWrapper>
}