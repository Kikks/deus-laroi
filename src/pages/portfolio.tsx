import Contact from '@/components/pages/Portfolio/Contact';
import Projects from '@/components/pages/Portfolio/Projects';
import Hero from '@/components/shared/Hero';
import Main from '@/layouts/Main';
import Meta from '@/templates/Meta';
import { AppConfig } from '@/utils/AppConfig';

const Portfolio = () => {
  return (
    <Main
      meta={
        <Meta
          title={`Portfolio | ${AppConfig.title}`}
          description={AppConfig.description}
        />
      }
    >
      <Hero title="Portfolio" image="/assets/images/portfolio.jpg" />
      <Projects />
      <Contact />
    </Main>
  );
};

export default Portfolio;
