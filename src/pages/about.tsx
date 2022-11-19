import Contact from '@/components/pages/About/Contact';
import Story from '@/components/pages/About/Story';
import Team from '@/components/pages/About/Team';
import Hero from '@/components/shared/Hero';
import Testimonials from '@/components/shared/Testimonials';
import Main from '@/layouts/Main';
import Meta from '@/templates/Meta';
import { AppConfig } from '@/utils/AppConfig';

const About = () => {
  return (
    <Main
      meta={
        <Meta
          title={`About Us | ${AppConfig.title}`}
          description={AppConfig.description}
        />
      }
    >
      <Hero title="About Us" image="/assets/images/about.jpg" />
      <Story />
      <Contact />
      <Testimonials />
      <Team />
    </Main>
  );
};

export default About;
