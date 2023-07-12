import { SyntheticEvent, useState } from 'react';
import { uiTextsRu } from '../../uiTexts/ru';
import { joinGame } from '../../client/wsClient';

export function EnterAsSecond() {
  const [name, setName] = useState(uiTextsRu.defaultName2);
  const [code, setCode] = useState('');

  function handle (e: SyntheticEvent){
    e.preventDefault();
    if(name === '') {
      joinGame(uiTextsRu.defaultName2, code);
    } else {
      joinGame(name, code);
    }
  }

  return <form>
    <input type='text' placeholder={uiTextsRu.enterYourName} value={name} onChange={(e) => setName(e.target.value)}/>
    <input type='text' placeholder={uiTextsRu.enterAccessCode} value={code} onChange={(e) => setCode(e.target.value)}/>
    <button onClick={(e) => handle(e)}>{uiTextsRu.enterGame}</button>
  </form>
}