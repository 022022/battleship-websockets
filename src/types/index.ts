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
  shipsAvailable: ShipAvailable[]
}

export interface ShipAvailable {
  type: number,
  quantity: number
}