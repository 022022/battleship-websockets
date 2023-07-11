export interface WSMessageData {
  type: string;
  data: string;
}

export interface AccessCodeData {
  accessCode: string,
  gameId: number,
}

export interface StartSetupShipsData {
  fieldSize: number,
  shipsAvailable: ShipAvailable[],
  gameId: number,
  connectionId: number
}

export interface ShipAvailable {
  type: number,
  quantity: number
}

export interface AttackResult {
  myTurn: boolean,
  myShipCells:  string[],
  myWoundedCells: string[],
  opponentsEmptyCells: string[],
  opponentsWoundedCells: string[],
}
