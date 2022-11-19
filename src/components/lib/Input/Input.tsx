import type { FC } from 'react';

import type InputProps from './Input.props';

const Input: FC<InputProps> = ({
  label,
  className,
  variant = 'light',
  ...rest
}) => {
  return (
    <div className="flex w-full flex-col gap-2">
      {label && <label>{label}</label>}
      <input
        className={`w-full rounded-lg border-none px-4 py-3 text-tertiary-main ${
          variant === 'light' ? 'bg-white ' : 'bg-deus-light-gray'
        } ${className}`}
        {...rest}
      />
    </div>
  );
};

export default Input;
