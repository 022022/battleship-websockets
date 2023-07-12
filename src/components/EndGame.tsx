import { EndGameData } from '../types';
import { uiTextsRu } from '../uiTexts/ru';
import { playerBoard } from '../utils/playerBoard';

export function EndGame({data}: {data: EndGameData}){
  const myBoard = playerBoard(data.myShipCells, data.myWoundedCells);
  const opponentBoard = playerBoard(data.opponentsShipCells, data.opponentsWoundedCells)

  return <>
      <div>{uiTextsRu.endGame} {data.winnerName}</div>
      {data.isWinner && <div>{uiTextsRu.congrats}</div>}
      <div className='temp-board'>
        {myBoard}
      </div>
      <div className='temp-board'>
        {opponentBoard}
      </div>
    </>
}