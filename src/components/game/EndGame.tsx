import { useEffect, useState } from 'react';
import { Board } from '../../styled/Board';
import { BoardCaptain } from '../../styled/BoardCaptain';
import { GameWrapper } from '../../styled/GameWrapper';
import { Instructions } from '../../styled/Instructions';
import { TwoPanelWrapper } from '../../styled/TwoPanelWrapper';
import { EndGameData } from '../../types';
import { uiTextsRu } from '../../uiTexts/ru';
import { playerBoard } from '../../utils/playerBoard';
import Confetti from 'react-confetti';

export function EndGame({data}: {data: EndGameData}){
  const myBoard = playerBoard(data.myShipCells, data.myWoundedCells);
  const opponentBoard = playerBoard(data.opponentsShipCells, data.opponentsWoundedCells);

  const [confetti, setConfetti] = useState(200);

  useEffect(() => {
    const confettiTimer = setTimeout(() => setConfetti(0), 3000);
    return () => {clearTimeout(confettiTimer)};
  }, [])

  return <GameWrapper>
      {data.isWinner && <Confetti numberOfPieces={confetti} />}
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
