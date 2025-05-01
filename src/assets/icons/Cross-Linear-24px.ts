import React from 'react';

import type { IconProps } from '@/types';

const Cross: React.FC<IconProps> = ({
  className,
  size = '24px',
  color = 'black',
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
      color,
      xmlns: 'http://www.w3.org/2000/svg',
      ...props,
    },
    React.createElement('path', {
      d: 'm 3.75,20.250007 8.250024,-8.249975 M 20.25,3.7499927 12.000024,12.000032 m 0,0 L 3.75,3.7499927 M 12.000024,12.000032 20.25,20.250007',
      stroke: 'currentColor',
      strokeWidth: '1.5',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    }),
  );
};

export default React.memo(Cross);
