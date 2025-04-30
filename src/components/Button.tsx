import React from 'react';

import type { ButtonProps } from '@/types';
import { determineComponent } from '@/utilities';
import '@/styles/Button.css';

function Button({
  className,
  Icon,
  label,
  onClick,
}: ButtonProps): React.JSX.Element {
  return (
    <button className={className} onClick={onClick}>
      {Icon && determineComponent(Icon)}
      <span>{label}</span>
    </button>
  );
}

export default React.memo(Button);
