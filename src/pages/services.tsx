import BuildingConstructionManagement from '@/components/pages/Services/BuildingConstructionManagement';
import Contact from '@/components/pages/Services/Contact';
import GeneralMaterialSupply from '@/components/pages/Services/GeneralMaterialSupply/GeneralMaterialSupply';
import ProjectCostConsultancy from '@/components/pages/Services/ProjectCostConsultancy';
import ProjectManagement from '@/components/pages/Services/ProjectManagement';
import Hero from '@/components/shared/Hero';
import Main from '@/layouts/Main';
import Meta from '@/templates/Meta';
import { AppConfig } from '@/utils/AppConfig';

const Services = () => {
  return (
    <Main
      meta={
        <Meta
          title={`Our Services | ${AppConfig.title}`}
          description={AppConfig.description}
        />
      }
    >
      <Hero title="Our Services" image="/assets/images/services.jpg" />
      <ProjectManagement />
      <ProjectCostConsultancy />
      <BuildingConstructionManagement />
      <GeneralMaterialSupply />
      <Contact />
    </Main>
  );
};

export default Services;
