import React from 'react';

export type RadiantParticleProps = {
  width: string;
  height: string;
  speed?: number;
  size?: number;
  numberOfParticles?: number;
};

export type TicTacToeTileProps = {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

export type IconProps = React.SVGProps<SVGSVGElement> & {
  className?: string;
  size?: string | number;
  color?: string;
};

export type ButtonProps = {
  className?: string;
  label: string;
  Icon?: React.ElementType | React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
