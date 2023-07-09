import { useEffect } from 'react';


export function Game () {
  const wsClient = new WebSocket('ws://localhost:3000');

  useEffect(() => {
    wsClient.send('')
  }, []);
  
  return ''
}