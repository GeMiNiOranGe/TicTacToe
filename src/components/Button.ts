import React from 'react';

import type { ButtonProps } from '@/types';
import { determineComponent } from '@/utilities';
import '@/styles/Button.css';

const Button: React.FC<ButtonProps> = ({ className, Icon, label, onClick }) => {
  return React.createElement(
    'button',
    { className, onClick },
    Icon && determineComponent(Icon),
    React.createElement('span', undefined, label),
  );
};

export default React.memo(Button);
