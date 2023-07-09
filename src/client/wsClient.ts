export const wsClient = new WebSocket('ws://localhost:4000');

export function createGame(name: string){
  const toServer = JSON.stringify({
      type: "create_game",
      data: JSON.stringify({
          initiatorPleerName: name
      })
  });
  wsClient.send(toServer);
}