import type { ReducerAction, ReducerActionWithoutPayload } from './other';
import type { TicTacToePageActionType } from '@/enums';

export type TicTacToePageAction =
  | ReducerAction<
      TicTacToePageActionType.OnTileClick,
      {
        index: number;
        winner: string | undefined;
      }
    >
  | ReducerActionWithoutPayload<TicTacToePageActionType.OnResetButtonClick>;
