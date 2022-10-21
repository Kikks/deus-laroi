import { motion } from 'framer-motion';
import type { FC, PropsWithChildren } from 'react';
import React from 'react';

import type ButtonProps from './Button.props';

const Button: FC<PropsWithChildren<ButtonProps>> = ({ children, ...rest }) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <button
        className="skew-x-[-12deg] rounded-lg bg-primary-main py-3 px-8 font-semibold text-white shadow-md"
        {...rest}
      >
        <div className="flex w-full skew-x-[12deg] items-center justify-center">
          {children}
        </div>
      </button>
    </motion.div>
  );
};

export default Button;
