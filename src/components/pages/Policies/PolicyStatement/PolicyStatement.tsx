const PolicyStatement = () => {
  return (
    <section className="icon-pattern-bg grid w-full place-items-center px-5 py-10 md:py-16 lg:py-20 lg:px-10">
      <div className="container flex w-full flex-col gap-10 md:gap-14">
        <h3 className="relative font-garamond text-sm font-bold uppercase text-tertiary-main before:absolute before:left-[0%] before:top-7 before:h-1 before:w-14 before:translate-x-[0%] before:rounded-md before:bg-secondary-dark md:text-xl md:before:top-10">
          Policy Statement
        </h3>

        <div className="flex w-full flex-col gap-5 md:flex-row md:gap-14 lg:gap-32">
          <div className="flex flex-1 flex-col gap-10">
            <p className="lg:text-lg">
              It is the policy of{' '}
              <span className="font-semibold text-secondary-dark">
                {' '}
                Deus ‘La Roi Limited
              </span>{' '}
              to provide our customers with products and services, which
              conforms to all specified requirements in a timely and cost
              effective manner.
              <br />
              We have established a quality system based on ISO 9001, quality
              management system for quality assurance in design/developement and
              installation services. All procedures, documentation and practice,
              in all areas, are equipped to meeting the requirements of this
              international standard.
            </p>
          </div>

          <div className="flex-1">
            <p className="lg:text-lg">
              All personnel have the responsibility, authority and
              organizational freedom to identify and evaluate quality concern
              and to initiate solutions. The employees are committed to
              continuous improvements of quality and are encouraged to be
              activly involved in defect prevention and the early detection and
              delimination of non-conformance. The employees are committed to
              maintain{' '}
              <span className="font-semibold">Deus ‘La Roi Limited</span> to
              always be at the frontier in the industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PolicyStatement;
