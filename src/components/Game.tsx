export function Game () {
  const wsClient = new WebSocket('ws://localhost:4000');
  wsClient.onmessage = (event: MessageEvent) => {console.log(event)};

  return <div></div>
}

