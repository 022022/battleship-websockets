import { useState } from 'react';
import { isValidMatrix } from '../utils/isValidMatrix';
import { uiTextsRu } from '../uiTexts/ru';
import { ShipAvailable } from '../types';

export function SetUpBoard({fieldSize, shipsAvailable}: {fieldSize: number, shipsAvailable: ShipAvailable[]}) {
  const [markedCells, setMarkedCells] = useState<string[]>([]);
  const [isValid, setIsValid] = useState(false);

  function validate(newMarkedCells: string[]) {
    if(isValidMatrix(newMarkedCells, shipsAvailable, fieldSize)){
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

  for(let i = 0; i < fieldSize; i++) {
    for(let j = 0; j < fieldSize; j++) {
      const isMarked = markedCells.includes(`${i},${j}`)
      board.push(
        <div key={`${i},${j}`}
          onClick={() => mark(i, j, isMarked)}
          className={isMarked ? 'temp-cell-check' : 'temp-cell-uncheck'}>
        </div>
      )
    }
  }

  return <>
    {isValid ? uiTextsRu.validShips : uiTextsRu.tip }
    <div className='temp-board'>
      {board}
      </div>
      <button disabled={!isValid}>{uiTextsRu.startGame}</button>
  </>
}