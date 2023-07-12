import { useState } from 'react';
import { AccessCodeData, AttackResult, EndGameData, StartSetupShipsData, WSMessageData } from './types';
import { Error } from './components/Error';
import { errorMessagesRu, uiTextsRu } from './uiTexts/ru';
import { wsClient } from './client/wsClient';
import { EnterAsSecond } from './components/forms/EnterAsSecond';
import { CreateGame } from './components/forms/CreateGame';
import { AccessCode } from './components/AccessCode';
import { SetUpBoard } from './components/SetUpBoard';
import { FullScrMessage } from './components/FullSrcMessage';
import { Playing } from './components/Playing';
import { gameSettings } from './gameSettings';
import { EndGame } from './components/EndGame';


export function Game () {
  const [componentToShow, setComponentToShow] = useState(<></>);
  const [instantMessage, setInstantMessage] = useState('');

  wsClient.onmessage = (event: MessageEvent<string>) => {
    const message = JSON.parse(event.data) as WSMessageData;
    console.log('message from server -- ', message);

    switch(message.type){
     case ('initial_connection'): {
      setComponentToShow(<><CreateGame/><EnterAsSecond/></>)
      break;
     }
     case ('provide_access_code'): {
      const data = JSON.parse(message.data) as AccessCodeData;
      setComponentToShow(<><AccessCode code={data.accessCode} gameId={data.gameId}/></>)
      break;
     }
     case ('start_setup_ships'): {
      const data = JSON.parse(message.data) as StartSetupShipsData;

      gameSettings.fieldSize = data.fieldSize;
      gameSettings.shipsAvailable = data.shipsAvailable;

      setComponentToShow(<SetUpBoard gameId={data.gameId} connectionId={data.gameId}/>)
      break;
     }
     case ('another_player_not_started'): {
      const data = JSON.parse(message.data) as {anotherPlayerName: string};
      const messageText = `${uiTextsRu.waitForAnotherPlayer} - ${data.anotherPlayerName}`;
      setComponentToShow(<FullScrMessage message={messageText} />)
      break;
     }
     case ('another_player_started'): {
      setInstantMessage(uiTextsRu.anotherPlayerIsWaiting)
      break;
     }
     case('attack_result'): {
      setInstantMessage('');
      const data = JSON.parse(message.data) as AttackResult;
      setComponentToShow(<Playing data={data}/>)
      break;
     }
     case('end_game'): {
      const data = JSON.parse(message.data) as EndGameData;
      setComponentToShow(<EndGame data={data}/>)
      break;
     }
    }
  };

  wsClient.onclose = () => {
    setComponentToShow(<Error message={errorMessagesRu.connectionLost}/>)
  }

  return <>
    <div>{instantMessage}</div>
    {componentToShow}
  </>



}
