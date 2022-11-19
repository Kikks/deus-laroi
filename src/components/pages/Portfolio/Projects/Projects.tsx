import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';

import { projects } from './data';
import Filter from './Filter';

const contentVariant = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariant = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('');

  const filteredProjects = useMemo(() => {
    return projects.filter((project) =>
      project.category.startsWith(activeFilter)
    );
  }, [activeFilter]);

  return (
    <section className="icon-pattern-bg grid w-full place-items-center px-5 py-10 md:py-16 lg:py-20 lg:px-10">
      <div className="container relative flex w-full flex-col gap-16">
        <Filter activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

        <h3 className="-mt-10 max-w-[30ch] font-garamond text-3xl font-semibold md:text-4xl lg:text-5xl">
          Feast your eyes with our <br className="hidden lg:block" /> completed{' '}
          <span className="text-secondary-dark">projects</span> under the{' '}
          <br className="hidden lg:block" />
          management of Eniola Olufemi.
        </h3>

        <motion.div
          variants={contentVariant}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 gap-20 md:grid-cols-2"
        >
          {filteredProjects.length === 0 ? (
            <div className="col-span-1 flex min-h-[400px] w-full flex-col items-center justify-center gap-10 text-center md:col-span-2">
              <span className="max-w-[50ch] font-bold">
                There are no projects to display under the {activeFilter}{' '}
                category.
              </span>
            </div>
          ) : (
            filteredProjects.map((project, index) => (
              <motion.div
                variants={cardVariant}
                key={`${project.name}-${index}`}
                className="col-span-1 flex w-full flex-col items-start gap-5"
              >
                <figure className="aspect-[594/480] w-full overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="h-full w-full object-cover duration-500 hover:-rotate-3 hover:scale-110"
                  />
                </figure>

                <div className="">
                  <h3 className="font-garamond text-lg font-bold">
                    {project.name}
                  </h3>
                  <span className="text-sm">{project.category}</span>
                </div>
              </motion.div>
            ))
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
