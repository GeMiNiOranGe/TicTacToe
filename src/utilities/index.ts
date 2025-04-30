import React from 'react';

/**
 * @param tiles
 * @returns "X" or "x", "O" or "o", undefined
 */
export function checkTicTacToeWinner(
  tiles: (string | undefined)[],
): string | undefined {
  const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 3, 6],
  ];

  for (const element of winningLines) {
    const [first, second, third] = element;
    if (
      tiles[first] &&
      tiles[first] === tiles[second] &&
      tiles[first] === tiles[third]
    ) {
      return tiles[first];
    }
  }

  return undefined;
}

export function determineComponent(
  Component: React.ElementType | React.ReactNode,
): React.ReactNode {
  if (React.isValidElement(Component)) {
    return Component;
  }
  if (typeof Component === 'function') {
    return React.createElement(Component);
  }
  if (typeof Component === 'object') {
    return React.createElement(Component as React.ElementType);
  }
  return undefined;
}

export function getCryptoRandom(): number {
  const array = new Uint32Array(1);
  window.crypto.getRandomValues(array);
  return array[0] / 2 ** 32;
}
