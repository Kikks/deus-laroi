import { Icon } from '@iconify/react';
import Link from 'next/link';
import type { FC } from 'react';
import { useEffect, useState } from 'react';

import links from '@/utils/constants/links';

import type TopDrawerProps from './TopDrawer.props';

const TopDrawer: FC<TopDrawerProps> = ({ isOpen, onClose }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(isOpen);
    }, 100);
  }, [isOpen]);

  const handleClose = () => {
    setShow(false);
    setTimeout(() => {
      onClose();
    }, 500);
  };

  return isOpen ? (
    <aside
      className={`fixed top-0 left-0 z-20 flex max-h-screen w-screen flex-col items-center gap-10 overflow-y-auto bg-white py-10 shadow-lg duration-500 ${
        show ? 'translate-y-0' : 'translate-y-[-150vh]'
      }`}
    >
      <button
        className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-primary-main/10"
        onClick={handleClose}
      >
        <Icon icon="ep:close" className="text-lg text-tertiary-main" />
      </button>

      {links.map((link, index) => (
        <Link href={link.url} key={index}>
          <a className="text-center" onClick={handleClose}>
            {link.title}
          </a>
        </Link>
      ))}

      <Link href="/contact">
        <a className="text-center" onClick={handleClose}>
          Contact
        </a>
      </Link>
    </aside>
  ) : (
    <></>
  );
};

export default TopDrawer;
