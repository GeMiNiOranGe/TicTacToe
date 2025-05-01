import React from 'react';

import type { IconProps } from '@/types';

const TicTacToe: React.FC<IconProps> = ({
  className,
  size = '24px',
  ...props
}) => {
  return React.createElement(
    'svg',
    {
      className,
      width: size,
      height: size,
      strokeWidth: '1.5',
      viewBox: '0 0 24 24',
      fill: 'none',
      color: 'currentColor',
      xmlns: 'http://www.w3.org/2000/svg',
      ...props,
    },
    React.createElement('path', {
      d: 'm 17.037785,10.674104 c 2.050092,0 3.712051,-1.6619596 3.712051,-3.7120515 0,-2.05011 -1.661959,-3.7120517 -3.712051,-3.7120517 -2.05011,0 -3.712051,1.6619417 -3.712051,3.7120517 0,2.0500919 1.661941,3.7120515 3.712051,3.7120515 z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    }),
    React.createElement('path', {
      d: 'M 3.2500014,10.674429 6.9622255,6.9622249 m 3.7122015,-3.712232 -3.7122015,3.712232 m 0,0 -3.7122241,-3.712232 m 3.7122241,3.712232 3.7122015,3.7122041',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    }),
    React.createElement('path', {
      d: 'm 13.325572,20.750007 3.712224,-3.712203 m 3.712203,-3.712232 -3.712203,3.712232 m 0,0 -3.712224,-3.712232 m 3.712224,3.712232 3.712203,3.712203',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    }),
    React.createElement('path', {
      d: 'm 6.962053,20.749673 c 2.0500917,0 3.712051,-1.66196 3.712051,-3.712052 0,-2.05011 -1.6619593,-3.712051 -3.712051,-3.712051 -2.0501098,0 -3.7120514,1.661941 -3.7120514,3.712051 0,2.050092 1.6619416,3.712052 3.7120514,3.712052 z',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    }),
  );
};

export default React.memo(TicTacToe);
