import { CreateGame } from './forms/CreateGame';
import { EnterAsSecond } from './forms/EnterAsSecond';

export function Entrance(){
  return<>
    <CreateGame />
    <EnterAsSecond />
  </>
}