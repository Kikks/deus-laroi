import { useState } from 'react';

const useToggle: (initialValue: boolean) => [boolean, () => void] = (
  initialValue
) => {
  const [value, setValue] = useState(initialValue);

  const toggleValue = () => {
    setValue((prevState) => !prevState);
  };

  return [value, toggleValue];
};

export default useToggle;
