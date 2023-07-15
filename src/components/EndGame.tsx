import { Board } from '../styled/Board';
import { GameWrapper } from '../styled/GameWrapper';
import { Instructions } from '../styled/Instructions';
import { TwoPanelWrapper } from '../styled/TwoPanelWrapper';
import { EndGameData } from '../types';
import { uiTextsRu } from '../uiTexts/ru';
import { playerBoard } from '../utils/playerBoard';

export function EndGame({data}: {data: EndGameData}){
  const myBoard = playerBoard(data.myShipCells, data.myWoundedCells);
  const opponentBoard = playerBoard(data.opponentsShipCells, data.opponentsWoundedCells)

  return <GameWrapper>
      <Instructions>{uiTextsRu.endGame} {data.winnerName}. {data.isWinner && uiTextsRu.congrats}</Instructions>
      <TwoPanelWrapper $divider={false}>
        <Board $highlight={false}>
            {myBoard}
        </Board>
        <Board $highlight={false}>
            {opponentBoard}
        </Board>
      </TwoPanelWrapper>
    </GameWrapper>
}
