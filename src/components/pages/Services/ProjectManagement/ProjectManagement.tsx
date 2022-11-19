const ProjectManagement = () => {
  return (
    <section
      id="project-management"
      className="icon-pattern-bg grid w-full place-items-center px-5 py-10 md:py-16 lg:py-20 lg:px-10"
    >
      <div className="container flex w-full flex-col gap-10 md:gap-14">
        <h3 className="relative font-garamond text-sm font-bold uppercase text-tertiary-main before:absolute before:left-[0%] before:top-7 before:h-1 before:w-14 before:translate-x-[0%] before:rounded-md before:bg-secondary-dark md:text-lg md:before:top-10">
          Project Management
        </h3>

        <div className="flex w-full flex-col gap-5 md:flex-row md:gap-14 lg:gap-32">
          <div className="flex flex-1 flex-col gap-10">
            <h1 className="font-garamond text-3xl font-medium md:text-3xl">
              Get a better <br className="sm:hidden" /> and more efficient{' '}
              <br /> management in planning and{' '}
              <br className="hidden lg:block" />
              administration with{' '}
              <span className="text-secondary-dark">project management</span>.
            </h1>
            <p className="lg:text-lg">
              The size and complexity of certain projects might demand a better
              and more efficient planning and administration than the ones
              operating within the traditional system. Where such demands
              exists, as Project Manager, we carry out these functions/roles:
            </p>
          </div>

          <div className="flex-1">
            <ul className="ml-5 grid list-disc gap-3">
              <li className="lg:text-lg">Drawing up of client’s brief.</li>
              <li className="lg:text-lg">
                Advise on the appointment and selection of the design team.
              </li>
              <li className="lg:text-lg">
                Drawing up programme of activities.
              </li>
              <li className="lg:text-lg">
                Co-ordinating the activities of all parties.
              </li>
              <li className="lg:text-lg">
                Monitoring progress to achieve the desired objectives.
              </li>
              <li className="lg:text-lg">
                Making sure that the project is completed on time.
              </li>
              <li className="lg:text-lg">
                Assist in formulating operational and maintenance policy after
                completion.
              </li>
              <li className="lg:text-lg">
                Where project is commercially oriented, we advice on letting
                procedure and means.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectManagement;
