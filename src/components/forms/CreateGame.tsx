import { SyntheticEvent, useState } from 'react';
import { uiTextsRu } from '../../uiTexts/ru';
import { createGame } from '../../client/wsClient';

export function CreateGame() {
  const [name, setName] = useState(uiTextsRu.defaultName1);
  function handle (e: SyntheticEvent){
    e.preventDefault();
    if(name === '') {
      createGame(uiTextsRu.defaultName1);
    } else {
      createGame(name);
    }
  }

  return <form>
    <input className='form-field' type='text' placeholder={uiTextsRu.enterYourName} value={name} onChange={(e) => setName(e.target.value)}/>
    <button className='button-primary' onClick={(e) => handle(e)}>{uiTextsRu.createGame}</button>
  </form>
}