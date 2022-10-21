import type { FC } from 'react';
import { useEffect } from 'react';

import type SetIndicatorProps from './SetIndicator.props';

const SetIndicator: FC<SetIndicatorProps> = ({ index, setActiveIndex }) => {
  useEffect(() => {
    setActiveIndex(index);
  }, [index]);

  return <></>;
};

export default SetIndicator;
