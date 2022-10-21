import Clients from '@/components/pages/Home/Clients';
import Contact from '@/components/pages/Home/Contact';
import Header from '@/components/pages/Home/Header';
import Services from '@/components/pages/Home/Services';
import Testimonials from '@/components/pages/Home/Testimonials';
import WhatIsInForYou from '@/components/pages/Home/WhatIsInForYou';
import Main from '@/layouts/Main';
import Meta from '@/templates/Meta';
import { AppConfig } from '@/utils/AppConfig';

const Index = () => {
  return (
    <Main
      meta={
        <Meta title={AppConfig.title} description={AppConfig.description} />
      }
    >
      <Header />
      <Testimonials />
      <Clients />
      <div className="h-10 w-full" />
      <WhatIsInForYou />
      <Services />
      <Contact />
    </Main>
  );
};

export default Index;
