const HSEPolicy = () => {
  return (
    <section className="grid w-full place-items-center bg-secondary-light px-5 py-10 md:py-16 lg:py-20 lg:px-10">
      <div className="container flex w-full flex-col gap-10 md:gap-14">
        <h3 className="relative font-garamond text-sm font-bold uppercase text-tertiary-main before:absolute before:left-[0%] before:top-7 before:h-1 before:w-14 before:translate-x-[0%] before:rounded-md before:bg-primary-main md:text-xl md:before:top-10">
          Project Cost Consultancy
        </h3>

        <div className="flex w-full flex-col gap-5 md:flex-row md:gap-14 lg:gap-32">
          <div className="flex flex-1 flex-col gap-10">
            <p className="lg:text-lg">
              <span className="font-semibold text-secondary-dark">
                {' '}
                Deus ‘La Roi Limited
              </span>{' '}
              recognizes the harzadous nature of its operations and the adverse
              consequences of its failure to observe check and control or
              completely eliminate the acts and conditions that could result in
              accidents or incidents.
              <br />
              It is our belief that good HSE performance is an integral part of
              efficient and profitable business management. We will therefore be
              guided by the following principles:
            </p>
          </div>

          <div className="flex-1">
            <ul className="ml-5 grid list-disc gap-3">
              <li className="lg:text-lg">
                Good relationship with host communities must be maintained
              </li>
              <li className="lg:text-lg">
                HSE is of equal importance to other business activities
              </li>
              <li className="lg:text-lg">
                HSE management is line responsibility.
              </li>
              <li className="lg:text-lg">Everyone is responsible for HSE</li>
              <li className="lg:text-lg">
                No activity shall be carried out unless considered safe
              </li>
              <li className="lg:text-lg">
                The health and safety of all employees, contractors and third
                parties must be safe guarded
              </li>
              <li className="lg:text-lg">
                The impact of the company’s activities on the environment must
                be minimized
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HSEPolicy;
