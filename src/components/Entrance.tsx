import { CreateGame } from './forms/CreateGame';
import { EnterAsSecond } from './forms/EnterAsSecond';
import { EntranceWrapper } from '../styled/Entrance';
import { H1 } from '../styled/H1';
import { uiTextsRu } from '../uiTexts/ru';


export function Entrance(){

  return<>
    <H1>{uiTextsRu.gameHeading}</H1>
    <EntranceWrapper>
      <CreateGame />
      <EnterAsSecond />
    </EntranceWrapper>
  </>


}