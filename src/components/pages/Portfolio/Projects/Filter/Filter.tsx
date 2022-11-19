import type { FC } from 'react';

import { filters } from '../data';
import type FilterProps from './Filter.props';

const Filter: FC<FilterProps> = ({ activeFilter, setActiveFilter }) => {
  return (
    <div className="sticky top-0 left-0 z-10 flex w-full flex-wrap items-center justify-center space-y-3 divide-x divide-tertiary-main bg-[#f5f5f5] py-5 md:space-y-0">
      <div className="mt-3 flex items-center md:mt-0">
        <span className="px-3 text-xs text-tertiary-main duration-200 md:text-sm">
          Filter by
        </span>

        <span
          onClick={() => setActiveFilter('')}
          className={`${
            activeFilter === '' ? 'text-primary-main' : 'text-tertiary-main'
          } cursor-pointer px-3 text-xs duration-200 md:text-sm`}
        >
          All
        </span>
      </div>

      {filters.map((filter, index) => (
        <span
          onClick={() => setActiveFilter(filter)}
          key={index}
          className={`${
            activeFilter === filter ? 'text-primary-main' : 'text-tertiary-main'
          } cursor-pointer px-3 text-xs duration-200 md:text-sm`}
        >
          {filter}
        </span>
      ))}
    </div>
  );
};

export default Filter;
