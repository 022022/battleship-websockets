import { Board } from '../styled/Board';
import { BoardCaptain } from '../styled/BoardCaptain';
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
      <Instructions> {data.isWinner ? uiTextsRu.congrats : `${uiTextsRu.endGame} ${data.winnerName}`}</Instructions>
      <TwoPanelWrapper $divider={false}>
        <div>
          <BoardCaptain>{uiTextsRu.myShips}</BoardCaptain>
          <Board $highlight={false}>
              {myBoard}
          </Board>
        </div>

        <div>
          <BoardCaptain>{uiTextsRu.opponentShips}</BoardCaptain>
          <Board $highlight={false}>
              {opponentBoard}
          </Board>
        </div>
      </TwoPanelWrapper>
    </GameWrapper>
}
