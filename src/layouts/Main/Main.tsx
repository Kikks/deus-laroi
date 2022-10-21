import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import TopDrawer from '@/components/shared/TopDrawer';
import useToggle from '@/hooks/useToggle';

import type IMainProps from './Main.props';

const Main = ({ children, meta }: IMainProps) => {
  const [topDrawerIsOpen, toggleTopDrawerIsOpen] = useToggle(false);

  return (
    <>
      {meta}

      <Navbar onMenuClicked={toggleTopDrawerIsOpen} />
      <TopDrawer isOpen={topDrawerIsOpen} onClose={toggleTopDrawerIsOpen} />
      <main className="w-full">{children}</main>
      <Footer />
    </>
  );
};

export default Main;
