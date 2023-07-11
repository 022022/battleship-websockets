import { sendAttack } from '../client/wsClient';
import { gameSettings } from '../gameSettings';
import { AttackResult } from '../types';
import { uiTextsRu } from '../uiTexts/ru';

export function Playing({data}: {data: AttackResult}){

  const myBoard = [];

  for(let i = 0; i < gameSettings.fieldSize; i++) {
    for(let j = 0; j < gameSettings.fieldSize; j++) {
      const isMarked = data.myShipCells.includes(`${i},${j}`);
      const isWounded = data.myWoundedCells.includes(`${i},${j}`);
      myBoard.push(
        <div key={`${i},${j}`}
          // onClick={() => mark(i, j, isMarked)}
          className={isWounded ? 'temp-wounded' : (isMarked ? 'temp-cell-check' : 'temp-cell-uncheck')}>
        </div>
      )
    }
  }

  const opponentBoard = [];

  for(let i = 0; i < gameSettings.fieldSize; i++) {
    for(let j = 0; j < gameSettings.fieldSize; j++) {
      const isMarked = data.opponentsEmptyCells.includes(`${i},${j}`);
      const isWounded = data.opponentsWoundedCells.includes(`${i},${j}`);
      opponentBoard.push(
        <div key={`${i},${j}`}
          onClick={() => data.myTurn && attack(i, j)}
          className={isWounded ? 'temp-wounded' : (isMarked ? 'temp-cell-uncheck' : 'temp-cell-unknown')}>
        </div>
      )
    }
  }

  function attack(i: number, j: number){
    console.log(i, j, gameSettings.gameId)
    sendAttack(`${i},${j}`, gameSettings.gameId)
  }
  return <>
      <div>
        {data.myTurn ? uiTextsRu.yourTurn : uiTextsRu.opponentTurn}
      </div>
      <div className='temp-board'>
        {myBoard}
      </div>
      <div className='temp-board'>
        {opponentBoard}
      </div>
    </>
}