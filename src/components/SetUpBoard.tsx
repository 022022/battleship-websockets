import { SyntheticEvent, useState } from 'react';
import { isValidMatrix } from '../utils/isValidMatrix';
import { uiTextsRu } from '../uiTexts/ru';
import { startGame } from '../client/wsClient';
import { gameSettings } from '../gameSettings';

export function SetUpBoard({gameId, connectionId}: {gameId: number, connectionId: number}) {
  gameSettings.gameId = gameId;
  
  const [markedCells, setMarkedCells] = useState<string[]>([]);
  const [isValid, setIsValid] = useState(false);

  function validate(newMarkedCells: string[]) {
    if(isValidMatrix(newMarkedCells, gameSettings.shipsAvailable, gameSettings.fieldSize)){
      setIsValid(true)
    } else {
      setIsValid(false)
    }
  }

  console.log(markedCells, isValid)

  function mark(i: number, j: number, isMarked: boolean){
    if(!isMarked){
      const newMarkedCells = [...markedCells, `${i},${j}`];
      validate(newMarkedCells);
      setMarkedCells([...newMarkedCells])
    } else {
      const newMarkedCells = markedCells.filter((item) => item !== `${i},${j}`);
      validate(newMarkedCells);
      setMarkedCells([...newMarkedCells])
    }
  }

  const board = [];

  for(let i = 0; i < gameSettings.fieldSize; i++) {
    for(let j = 0; j < gameSettings.fieldSize; j++) {
      const isMarked = markedCells.includes(`${i},${j}`)
      board.push(
        <div key={`${i},${j}`}
          onClick={() => mark(i, j, isMarked)}
          className={isMarked ? 'temp-cell-check' : 'temp-cell-uncheck'}>
        </div>
      )
    }
  }

  function handle(e: SyntheticEvent){
    e.preventDefault();
    startGame(markedCells, gameId, connectionId);
  }

  return <>
    {isValid ? uiTextsRu.validShips : uiTextsRu.tip }
      <div className='temp-board'>
      {board}
      </div>
      <button disabled={!isValid} onClick={(e) => handle(e)}>{uiTextsRu.startGame}</button>
  </>
}