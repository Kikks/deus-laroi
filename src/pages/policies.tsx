import Contact from '@/components/pages/Policies/Contact';
import HSEPolicy from '@/components/pages/Policies/HSEPolicy';
import PolicyStatement from '@/components/pages/Policies/PolicyStatement';
import Hero from '@/components/shared/Hero';
import Main from '@/layouts/Main';
import Meta from '@/templates/Meta';
import { AppConfig } from '@/utils/AppConfig';

const Policies = () => {
  return (
    <Main
      meta={
        <Meta
          title={`Policies | ${AppConfig.title}`}
          description={AppConfig.description}
        />
      }
    >
      <Hero title="Policies" image="/assets/images/policies.jpg" />
      <PolicyStatement />
      <HSEPolicy />
      <Contact />
    </Main>
  );
};

export default Policies;
