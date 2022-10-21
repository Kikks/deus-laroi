import type React from 'react';

export default interface ButtonProps
  extends Omit<React.HTMLProps<HTMLButtonElement>, 'size'> {
  type?: 'button' | 'submit' | 'reset';
}
