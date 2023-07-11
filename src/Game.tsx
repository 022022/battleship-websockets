import { useState } from 'react';
import { AccessCodeData, StartSetupShipsData, WSMessageData } from './types';
import { Error } from './components/Error';
import { uiTextsRu } from './uiTexts/ru';
import { wsClient } from './client/wsClient';
import { EnterAsSecond } from './components/forms/EnterAsSecond';
import { CreateGame } from './components/forms/CreateGame';
import { AccessCode } from './components/AccessCode';
import { SetUpBoard } from './components/SetUpBoard';

export function Game () {
  const [componentToShow, setComponentToShow] = useState(<></>);

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
      setComponentToShow(<SetUpBoard fieldSize={data.fieldSize} shipsAvailable = {data.shipsAvailable}/>)

      break;
     }
    }

  };

  wsClient.onclose = () => {
    setComponentToShow(<Error message={uiTextsRu.connectionLost}/>)
  }

  return componentToShow;

}
