import React from 'react';
import { Circle, Refresh } from 'iconoir-react';

import { Button, RadiantParticle, TicTacToeTile } from '@/components';
import { TicTacToePageActionType } from '@/enums';
import type { TicTacToePageAction, TicTacToePageState } from '@/types';
import { ticTacToePageReducer } from '@/store/reducers';
import { checkTicTacToeWinner, determineComponent } from '@/utilities';
import { Cross } from '@/assets/icons';
import '@/styles/TicTacToePage.css';

const ticTacToePageInitialState: TicTacToePageState = {
  tiles: Array(9).fill(undefined),
  isXPlayerTurn: true,
};

function TicTacToePage(): React.JSX.Element {
  const [state, dispatch] = React.useReducer<
    TicTacToePageState,
    [TicTacToePageAction]
  >(ticTacToePageReducer, ticTacToePageInitialState);

  const winner = checkTicTacToeWinner(state.tiles);

  const onTileClick = React.useCallback<(index: number) => void>(
    index => {
      dispatch({
        type: TicTacToePageActionType.OnTileClick,
        payload: { index, winner },
      });
    },
    [winner],
  );

  const onResetButtonClick = React.useCallback(() => {
    dispatch({ type: TicTacToePageActionType.OnResetButtonClick });
  }, []);

  const renderTicTacToeTile = (
    item: string,
    index: number,
  ): React.JSX.Element => {
    let TileIcon: React.ElementType | React.ReactNode = undefined;

    if (item === 'X') {
      TileIcon = <Cross className="tile-icon" />;
    }

    if (item === 'O') {
      TileIcon = <Circle className="tile-icon" />;
    }

    return (
      <TicTacToeTile key={index} onClick={() => onTileClick(index)}>
        {TileIcon && determineComponent(TileIcon)}
      </TicTacToeTile>
    );
  };

  return (
    <div className="container tic-tac-toe-page">
      <div className="turn-box center">
        {state.isXPlayerTurn && (
          <RadiantParticle height="100vh" width="66vh" size={10} speed={20} />
        )}
        <Cross
          className={`turn-icon ${state.isXPlayerTurn ? 'playing' : ''}`}
        />
      </div>

      <div className="display-flex flex-column align-center">
        {winner && <span>Winner is {winner}</span>}

        <div className="game-board">{state.tiles.map(renderTicTacToeTile)}</div>

        <div className="button-box">
          <Button
            className="button"
            label="Reset 4"
            Icon={Refresh}
            onClick={onResetButtonClick}
          />
        </div>
      </div>

      <div className="turn-box center">
        {!state.isXPlayerTurn && (
          <RadiantParticle height="100vh" width="66vh" size={10} speed={20} />
        )}
        <Circle
          className={`turn-icon ${!state.isXPlayerTurn ? 'playing' : ''}`}
        />
      </div>
    </div>
  );
}

export default React.memo(TicTacToePage);
