const ProjectCostConsultancy = () => {
  return (
    <section
      id="project-cost-consultancy"
      className="grid w-full place-items-center bg-secondary-light px-5 py-10 md:py-16 lg:py-20 lg:px-10"
    >
      <div className="container flex w-full flex-col gap-10 md:gap-14">
        <h3 className="relative font-garamond text-sm font-bold uppercase text-tertiary-main before:absolute before:left-[0%] before:top-7 before:h-1 before:w-14 before:translate-x-[0%] before:rounded-md before:bg-primary-main md:text-lg md:before:top-10">
          Project Cost Consultancy
        </h3>

        <div className="flex w-full flex-col gap-5 md:flex-row md:gap-14 lg:gap-32">
          <div className="flex flex-1 flex-col gap-10">
            <h1 className="font-garamond text-3xl font-medium md:text-3xl">
              You are guaranteed the best professional{' '}
              <br className="hidden lg:block" /> advice on your building project
              with{' '}
              <span className="text-primary-main">
                project cost consultancy
              </span>
              .
            </h1>
            <p className="lg:text-lg">
              The firm is also engaged in providing professional cost advice on
              building and engineering projects. The firm has the technical
              capacity and capability of providing pre-contract and post
              contract services including but not limited to the following:
            </p>
          </div>

          <div className="flex-1">
            <ul className="ml-5 grid list-disc gap-3">
              <li className="lg:text-lg">Tendering procedures.</li>
              <li className="lg:text-lg">Bid documentation.</li>
              <li className="lg:text-lg">Valuation.</li>
              <li className="lg:text-lg">Statement of project accounts.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCostConsultancy;
