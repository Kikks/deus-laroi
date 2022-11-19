import type { FC } from 'react';

import type SelectProps from './Select.props';

const Input: FC<SelectProps> = ({
  label,
  options,
  className,
  variant = 'light',
  ...rest
}) => {
  return (
    <div className="flex w-full flex-col gap-2">
      {label && <label>{label}</label>}
      <select
        className={`min-h-[50px] w-full rounded-lg border-none px-4 py-3 text-tertiary-main ${
          variant === 'light' ? 'bg-white ' : 'bg-deus-light-gray'
        } ${className}`}
        {...rest}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Input;
