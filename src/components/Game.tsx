import { useState } from 'react';
import { WSMessageData } from '../types';
import { InfoAction } from './InfoAction';
import { Error } from './Error';
import { uiTextsRu } from '../uiTexts/ru';
import { GAME_STATES } from '../constants';
import { wsClient } from '../client/wsClient';

export function Game () {
  const [isConnected, setIsConnected] = useState(false);
  const [gameState, setGameState] = useState(GAME_STATES.ENTER);

  wsClient.onmessage = (event: MessageEvent<string>) => {
    const message = JSON.parse(event.data) as WSMessageData;
    console.log('message from server -- ', message);

    switch(message.type){
     case ('initial_connection'): {
      setIsConnected(true);
      setGameState(GAME_STATES.ENTER);
      break;
     }
    }

  };

  wsClient.onclose = () => {
    setIsConnected(false);
  }

  return <div>
    { isConnected ? <InfoAction gameState={gameState} /> : <Error message={uiTextsRu.connectionLost}/>}

  </div>
}
