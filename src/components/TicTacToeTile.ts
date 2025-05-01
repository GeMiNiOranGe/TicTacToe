import React from 'react';

import type { TicTacToeTileProps } from '@/types';
import '@/styles/TicTacToeTile.css';

const TicTacToeTile: React.FC<TicTacToeTileProps> = ({ children, onClick }) => {
  return React.createElement('div', { className: 'tile', onClick }, children);
};

export default React.memo(TicTacToeTile);
