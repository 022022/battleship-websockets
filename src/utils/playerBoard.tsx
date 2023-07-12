import { gameSettings } from '../gameSettings';

export function playerBoard(ships: string[], wounded: string[]){
  const board = [];

  for(let i = 0; i < gameSettings.fieldSize; i++) {
    for(let j = 0; j < gameSettings.fieldSize; j++) {
      const isMarked = ships.includes(`${i},${j}`);
      const isWounded = wounded.includes(`${i},${j}`);
      board.push(
        <div key={`${i},${j}`}
          className={isWounded ? 'temp-wounded' : (isMarked ? 'temp-cell-check' : 'temp-cell-uncheck')}>
        </div>
      )
    }
  }

  return board;
}