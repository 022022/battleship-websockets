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

export function joinGame(name: string, code: string){
  const toServer = JSON.stringify({
      type: "join_game",
      data: JSON.stringify({
        secondPlayerName: name,
        accessCode: code
      })
  });
  wsClient.send(toServer);
}


export function setUpShips(gameId: number){
  const toServer = JSON.stringify({
      type: "set_up_ships",
      data: JSON.stringify({gameId})
  });
  wsClient.send(toServer);
}