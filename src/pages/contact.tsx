import AskQuestion from '@/components/pages/Contact/AskQuestion';
import ProjectDetails from '@/components/pages/Contact/ProjectDetails';
import Main from '@/layouts/Main';
import Meta from '@/templates/Meta';
import { AppConfig } from '@/utils/AppConfig';

const Contact = () => {
  return (
    <Main
      meta={
        <Meta
          title={`Contact Us | ${AppConfig.title}`}
          description={AppConfig.description}
        />
      }
    >
      <ProjectDetails />
      <AskQuestion />
    </Main>
  );
};

export default Contact;
