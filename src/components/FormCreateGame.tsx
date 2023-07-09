import { SyntheticEvent, useState } from 'react';
import { uiTextsRu } from '../uiTexts/ru';
import { createGame } from '../client/wsClient';

export function FormCreateGame() {
  const [name, setName] = useState('');
  function handle (e: SyntheticEvent){
    e.preventDefault();
    createGame(name);
  }

  return <form>
    <input type='text' placeholder={uiTextsRu.enterYourName} value={name} onChange={(e) => setName(e.target.value)}/>
    <button onClick={(e) => handle(e)}>{uiTextsRu.createGame}</button>
  </form>
}