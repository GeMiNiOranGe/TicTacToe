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
      TileIcon = React.createElement(Cross, { className: 'tile-icon' });
    }

    if (item === 'O') {
      TileIcon = React.createElement(Circle, { className: 'tile-icon' });
    }

    return React.createElement(
      TicTacToeTile,
      { key: index, onClick: () => onTileClick(index) },
      TileIcon && determineComponent(TileIcon),
    );
  };

  return React.createElement(
    'div',
    { className: 'container tic-tac-toe-page' },
    React.createElement(
      'div',
      { className: 'turn-box center' },
      state.isXPlayerTurn &&
        React.createElement(RadiantParticle, {
          height: '100vh',
          width: '66vh',
          size: 10,
          speed: 20,
        }),
      React.createElement(Cross, {
        className: `turn-icon ${state.isXPlayerTurn ? 'playing' : ''}`,
      }),
    ),
    React.createElement(
      'div',
      { className: 'display-flex flex-column align-center' },
      winner && React.createElement('span', undefined, `Winner is ${winner}`),
      React.createElement(
        'div',
        { className: 'game-board' },
        state.tiles.map(renderTicTacToeTile),
      ),
      React.createElement(
        'div',
        { className: 'button-box' },
        React.createElement(Button, {
          className: 'button',
          label: 'Reset 4',
          Icon: Refresh,
          onClick: onResetButtonClick,
        }),
      ),
    ),
    React.createElement(
      'div',
      { className: 'turn-box center' },
      !state.isXPlayerTurn &&
        React.createElement(RadiantParticle, {
          height: '100vh',
          width: '66vh',
          size: 10,
          speed: 20,
        }),
      React.createElement(Circle, {
        className: `turn-icon ${!state.isXPlayerTurn ? 'playing' : ''}`,
      }),
    ),
  );
}

export default React.memo(TicTacToePage);
