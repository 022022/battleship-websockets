import { GAME_STATES } from '../constants';
import { FormCreateGame } from './FormCreateGame';
import { EnterAsSecond } from './FormEnterAsSecond';

export function InfoAction(
  {gameState}:{ gameState: GAME_STATES }){

  switch(gameState){
    case GAME_STATES.ENTER: {
      return <>
        <FormCreateGame></FormCreateGame>
        <EnterAsSecond></EnterAsSecond>
      </>
    }
  }
  return <div>Connected</div>
}