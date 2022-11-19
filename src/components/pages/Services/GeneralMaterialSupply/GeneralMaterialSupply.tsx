const GeneralMaterialSupply = () => {
  return (
    <section
      id="general-material-supply"
      className="grid w-full place-items-center bg-secondary-light px-5 py-10 md:py-16 lg:py-20 lg:px-10"
    >
      <div className="container flex w-full flex-col gap-10 md:gap-14">
        <h3 className="relative font-garamond text-sm font-bold uppercase text-tertiary-main before:absolute before:left-[0%] before:top-7 before:h-1 before:w-14 before:translate-x-[0%] before:rounded-md before:bg-primary-main md:text-lg md:before:top-10">
          General Material Supply
        </h3>

        <div className="flex w-full flex-col gap-5 md:flex-row md:gap-14 lg:gap-32">
          <div className="flex flex-1 flex-col gap-10">
            <h1 className="font-garamond text-3xl font-medium md:text-3xl">
              Get the best approach to meet your needs with{' '}
              <span className="text-primary-main">general material supply</span>
              .
            </h1>
            <p className="lg:text-lg">
              Deus ‘La Roi Limited has extensively network its operations to
              provide material supplies of any kind to any part of the country.
              Our delivery process is established to provide an assured and
              professional approach to meet your requirements.
            </p>
          </div>

          <div className="flex-1"></div>
        </div>
      </div>
    </section>
  );
};

export default GeneralMaterialSupply;
